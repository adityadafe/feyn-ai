import { db } from "@/app/db"
import { GetUserId } from "@/lib/getuserid"
import { SendMessageValidator } from "@/lib/validators/SendMessageValidator"
import { NextResponse } from "next/server"
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { pinecone } from "@/lib/pinecone"
import { openai } from "@/lib/openai"
import { OpenAIStream, StreamingTextResponse } from 'ai'


export async function POST(req: Request) {
	const body = await req.json()
	const getUser = await GetUserId()

	if (!getUser) {
		return NextResponse.json('unauthorized', { status: 401 })
	}

	const { fileId, message } = SendMessageValidator.parse(body)

	const userId = getUser?.id

	const file = await db.file.findFirst({
		where: {
			id: fileId,
			userId,
		}
	})

	if (!file) {
		return NextResponse.json('Not found', { status: 404 })
	}

	await db.message.create({
		data: {
			text: message,
			isUserMessage: true,
			userId,
			fileId,
			isMarkdown: false,
		}
	})

	const embeddings = new OpenAIEmbeddings({
		openAIApiKey: process.env.OPENAI_API_KEY
	})

	const pineconeIndex = pinecone.index('feyn')

	const vectorStore = await PineconeStore.fromExistingIndex(
		embeddings,
		{
			pineconeIndex,
			namespace: file.id
		}
	)

	console.log(vectorStore)

	const results = await vectorStore.similaritySearch(
		message, 4
	)

	console.log(results)

	const prevMessages = await db.message.findMany({
		where: {
			fileId
		},
		orderBy: {
			createdAt: 'asc'
		},
		take: 6
	})

	const formattedPrevMessages = prevMessages.map((el) => ({
		role: el.isUserMessage
			? ('user' as const)
			: ('assistant' as const),
		content: el.text,
	}))

	console.log(formattedPrevMessages)

	const response = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		temperature: 0,
		stream: true,
		messages: [
			{
				role: 'system',
				content:
					'Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format.',
			},
			{
				role: 'user',
				content: `Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format. \nIf you don't know the answer, just say that you don't know, don't try to make up an answer.
        
  \n----------------\n
  
  PREVIOUS CONVERSATION:
  ${formattedPrevMessages.map((message) => {
					if (message.role === 'user')
						return `User: ${message.content}\n`
					return `Assistant: ${message.content}\n`
				})}
  
  \n----------------\n
  
  CONTEXT:
  ${results.map((r) => r.pageContent).join('\n\n')}
  
  USER INPUT: ${message}`,
			},
		],
	})

	const stream = OpenAIStream(response, {
		async onCompletion(completion) {
			await db.message.create({
				data: {
					text: completion,
					isUserMessage: false,
					isMarkdown: false,
					fileId,
					userId
				}
			})
		}
	})


	return new StreamingTextResponse(stream)
}
