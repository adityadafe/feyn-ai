import { MessageSquare } from "lucide-react"
import Skeleton from 'react-loading-skeleton'
import Message from "./message"

interface MessageProps {
	fileId: string,
	userId: string
}


export default async function Messages({ fileId, userId }: MessageProps) {


	const messages = await fetch('http://localhost:3000/api/filemessages', {
		method: 'POST',
		body: JSON.stringify({ fileId, userId })
	})

	console.log(messages.body)

	return (
		<div className="flex max-h-[calc(100vh-3.5rem-7rem)] border-zinc-200 flex-1 flex-col-reverse gap-4 p-3 overflow-y-auto scrollbar-thumb-white 
scrollbar-thumb-rounded scrollbar-track-white scrollbar-w-2 scrolling-touch">
			{
				/*
				messages && messages.length > 0 ? (
					messages.map((message, i) => {

						const isNextMessageSamePerson = messages[i - 1]?.isUserMessage === messages[i]?.isUserMessage

						if (i === messages.length - 1) {
							return <Message key={message.id} isNextMessageSamePerson={isNextMessageSamePerson} message={message} />
						} else {
							return <Message key={message.id} isNextMessageSamePerson={isNextMessageSamePerson} message={message} />
						}
					})

				) : (<div className="w-full flex flex-col gap-2">
					<Skeleton className="h-16" />
					<Skeleton className="h-16" />
					<Skeleton className="h-16" />
					<Skeleton className="h-16" />
				</div >)
			*/
			}
		</div >
	)
}
