"use client"

import { Button } from "./ui/button"
import { DialogContent, Dialog, DialogTrigger } from "./ui/dialog"
import Uploadthing from "./uploadthing"
import { Toaster } from "react-hot-toast";


export default function UploadButton() {


	return (
		<>
			<div><Toaster position="top-right" reverseOrder={false} /></div>
			<div className='mx-[3vw] mt-[5vh] flex justify-between' >
				<p className="text-white font-recoleta text-5xl">My Files</p>
				<Dialog>
					<DialogTrigger asChild >
						<Button variant="secondary" className="mr-[2vw]">Upload</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-md">
						<Uploadthing />
					</DialogContent>
				</Dialog>
			</div >
		</>
	)
}
