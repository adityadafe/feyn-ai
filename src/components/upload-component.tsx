"use client"

import { useDropzone } from "react-dropzone"

export default function UploadComponent() {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		accept: {
			"file/pdf": [".pdf"]
		},
		maxSize: 4000000
	})

	const files = acceptedFiles.map(file => {
		<li key={file.name}>
			{file.name} - {file.size} bytes
		</li>
	})

	return (
		<>
			<div className="h-[70vh] flex items-center justify-center">
				<section className="flex h-[40vh] w-[60vw] border-2 border-white border-dotted bg-slate-200/50 items-center justify-center rounded-md">
					<div {...getRootProps()} className="w-full h-full flex justify-center items-center ">
						<input {...getInputProps()} />
						<p className="text-black font-sans">Drag 'n' drop some files here, or click to select files</p>
					</div>
				</section>

			</div>
		</>
	)
}
