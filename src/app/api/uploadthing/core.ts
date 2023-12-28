import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "@/app/db";
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { pinecone } from "@/lib/pinecone";
import { PineconeStore } from "langchain/vectorstores/pinecone";

const f = createUploadthing();


const middleware = async () => {
	const session: {
		user: {
			name: string,
			image: string,
			email: string
		}
	} | null = await getServerSession(authOptions)

	const getUser = await db.user.findFirst({
		where: { email: session?.user.email }
	})
	return { userId: getUser?.id }
}

const onUploadComplete = async ({ metadata, file }: {
	metadata: Awaited<ReturnType<typeof middleware>>
	file: {
		key: string
		name: string
		url: string
	}
}) => {

	const doesFileExist = await db.file.findFirst({
		where: {
			key: file.key
		}
	})

	if (doesFileExist) return

	const createdFile = await db.file.create({
		data: {
			key: file.key,
			name: file.name,
			userId: metadata.userId,
			url: `https://utfs.io/f/${file.key}`,
		}
	})

	try {
		const response = await fetch(`https://utfs.io/f/${file.key}`)
		const blob = await response.blob()
		const loader = new PDFLoader(blob)
		const pageLevelDocs = await loader.load()
		const pineconeIndex = pinecone.index('feyn')

		const embeddings = new OpenAIEmbeddings({
			openAIApiKey: process.env.OPENAI_API_KEY
		})

		await PineconeStore.fromDocuments(pageLevelDocs, embeddings, {
			pineconeIndex,
			namespace: createdFile.id
		})
	} catch (err) {
		console.log(err)
	}

	return { createdFile }
}


export const ourFileRouter = {

	pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
		.middleware(middleware)
		// @ts-ignore
		.onUploadComplete(onUploadComplete),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
