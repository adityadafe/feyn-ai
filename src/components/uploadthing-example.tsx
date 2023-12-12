"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import {  useToast } from "./ui/use-toast";

export default function Uploadthing() {

const { toast } = useToast()

	return (
		<UploadDropzone
			endpoint="pdfUploader"
			onClientUploadComplete={(res) => {
				// Do something with the response
				console.log("Files: ", res);
				toast({
					title: "The file is uploaded",
					description: "Now uploading to Vector DB",
				})
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
