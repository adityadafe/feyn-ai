'use client'

import { Send } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
export default function ChatInput() {
	const [placeHolder, setPlaceHolder] = useState('Write Your Text here')
	return (
		<div className="flex flex-row items-center">
			<Input className="text-white" placeholder={placeHolder} onChange={e => setPlaceHolder(e.target.value)} />
			<Button onClick={async () => { }}>
				<Send color="white" className="w-14" />
			</Button>
		</div>
	)
}
