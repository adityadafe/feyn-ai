'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import UploadComponent from "./upload-component"

export default function UploadButton() {
	const [showComponent, setShowComponent] = useState(false)

	return (
		<>
			<div className='mx-[3vw] mt-[5vh] flex justify-between' >
				<p className="text-white font-recoleta text-5xl">My Files</p>
				<Button variant="secondary" className="mr-[2vw]" onClick={() => setShowComponent(!showComponent)}>Upload</Button>
			</div >
			{
				showComponent
					? <UploadComponent />
					: null
			}
		</>
	)
}
