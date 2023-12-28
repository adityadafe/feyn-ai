'use client'
import { useState } from 'react'
import ChatInput from './chatInput'
import Messages from './messages'

interface ChatWrapperProps {
	fileId: string
	userId: string
}

export default function ChatWrapper({ fileId, userId }: ChatWrapperProps) {


	const [response, setResponse] = useState()

	return (
		<>
			<div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-200 flex-col justify-between gap-2 text-white">
				<Messages fileId={fileId} userId={userId}/>
				<ChatInput setResponse={setResponse} fileId={fileId} />
			</div>
		</>
	)
}
