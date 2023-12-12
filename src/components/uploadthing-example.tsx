"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import toast from "react-hot-toast";


export default function Uploadthing() {


	return (
		<>
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
