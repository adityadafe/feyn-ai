"use client"

import { Button } from "./ui/button"
import UploadComponent from "./upload-component"
import { DialogContent, Dialog, DialogTrigger } from "./ui/dialog"

export default function UploadButton() {

	return (
		<>
			<div className='mx-[3vw] mt-[5vh] flex justify-between' >
				<p className="text-white font-recoleta text-5xl">My Files</p>
				<Dialog>
					<DialogTrigger asChild >
						<Button variant="secondary" className="mr-[2vw]">Upload</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-md">
						<UploadComponent />
					</DialogContent>

				</Dialog>
			</div >
		</>
	)
}
