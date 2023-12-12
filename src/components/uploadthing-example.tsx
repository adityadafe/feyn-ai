"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import toast, { Toaster } from "react-hot-toast";


export default function Uploadthing() {


	return (
		<>
			<div><Toaster position="top-right" reverseOrder={false} /></div>
			<UploadDropzone
				endpoint="pdfUploader"
				onClientUploadComplete={(res) => {
					console.log("Files: ", res);
					toast.success('File upload complete')
				}}
				onUploadError={(error: Error) => {
					toast.error('Couldnt upload file make sure it is pdf or try different pdf', { duration: 3000 })

				}}
				onUploadBegin={(name) => {
					console.log("Uploading: ", name);
				}}
			/>
		</>
	);
}
