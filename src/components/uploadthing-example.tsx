"use client";

import { UploadDropzone } from "@/lib/uploadthing";

export default function Uploadthing() {


	return (
		<UploadDropzone
			endpoint="pdfUploader"
			onClientUploadComplete={(res) => {
				// Do something with the response
				console.log("Files: ", res);
				
			}}
			onUploadError={(error: Error) => {
				alert(`ERROR! ${error.message}`);
			}}
			onUploadBegin={(name) => {
				console.log("Uploading: ", name);
			}}
		/>
	);
}
