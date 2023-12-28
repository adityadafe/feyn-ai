'use client'
import { useEffect, useState } from 'react'
import ChatInput from './chatInput'
import { db } from '@/app/db'
import { Play } from 'next/font/google'

interface ChatWrapperProps {
	fileId: string
}

export default function ChatWrapper({ fileId }: ChatWrapperProps) {

	useEffect(() => {
		async function getHistory() {
			await db.message.findMany({
				where: {

				}
			})
		}
	})

	const [response, setResponse] = useState()
	const [chatHistory, setChatHistory] = useState()

	return (
		<>
			<div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-200 flex-col justify-between gap-2 text-white">
				{response}
				<ChatInput setResponse={setResponse} fileId={fileId} />
			</div>
		</>
	)
}
