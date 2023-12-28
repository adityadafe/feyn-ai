'use client'
import { read } from 'fs'
import { useEffect, useState } from 'react'

interface ChatWrapperProps {
	fileId: string
}

export default function ChatWrapper({ fileId }: ChatWrapperProps) {

	const [response, setResponse] = useState()
	const message = 'What is room'



	useEffect(() => {

		async function getMyRes() {
			const res = await fetch('/api/message', {
				method: 'POST',
				body: JSON.stringify({
					fileId,
					message
				})
			})

			if (!res) {
				throw new Error('Some thing went wrong')
			}
			const data = res.body
			if (!data) {
				return
			}

			const reader = data.getReader()
			const decoder = new TextDecoder()

			while (true) {
				const { done, value } = await reader.read()
				if (done) {
					break;
				}
				else {
					const chunkvalue = decoder.decode(value)
					//@ts-ignore
					setResponse((prev) => prev + chunkvalue)
				}

			}
			console.log(reader)
		}

		getMyRes()

	}, [])

	return (
		<>
			<div className="border-white border-dotted border-2 h-full w-1/2 mt-3 flex flex-col-reverse text-white">

				{response}


			</div>
		</>
	)
}
