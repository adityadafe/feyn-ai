"use client"

import Dropzone from "react-dropzone"
import { UploadCloud } from 'lucide-react';

export default function UploadComponent() {
	return (
		<>
			<Dropzone
				accept={{
					["file/pdf"]: [".pdf"]
				}}
				multiple={false}
				onDrop={async (acceptedFile) => {
					console.log(acceptedFile)
				}}

			>
				{({ getRootProps, getInputProps, acceptedFiles }) => (
					<section className="mt-5 flex flex-col  border-2 border-white border-dotted bg-slate-200/50 items-center justify-center rounded-md">
						<UploadCloud size={150} color="black" />
						<div {...getRootProps()} className="w-full h-full flex justify-center items-center ">
							<input {...getInputProps()} />
							<p className="text-black font-sans">Drag 'n' drop some files here, or click to select files</p>
						</div>
					</section>
				)}

			</Dropzone >
		</>
	)
}
