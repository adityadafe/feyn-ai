'use client'

import { Send } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React, { useState } from "react";

interface ChatInputProps {
	setResponse: React.SetStateAction<any>
	fileId: string
}

export default function ChatInput({ setResponse, fileId }: ChatInputProps) {

	const [message, setMessage] = useState<string>('')

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault()

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
				let chunkvalue = decoder.decode(value)
				//@ts-ignore
				setResponse((prev) => prev + chunkvalue)
			}
		}

		setMessage('')
	}

	return (
		<div className="absolute bottom-0 left-0 w-full">
			<div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
				<div className="relative flex h-full flex-1 items-stretch md:flex-col">
					<div className="relative flex flex-col w-full flex-grow p-4">
						<form onSubmit={onSubmit} className="flex flex-row items-center w-[40vw]">
							<Input className="resize-none pr-12 text-base py-3  text-white" placeholder="Ask questions like what is this pdf about?" onChange={e => setMessage(e.target.value)}
								value={message}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										onSubmit(e)
									}
								}}
							/>
							<Button type="submit">
								<Send color="white" className="w-14" />
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>

	)

}
