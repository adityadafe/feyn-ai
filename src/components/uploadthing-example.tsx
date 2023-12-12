"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { toast } from "./ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

export default function Uploadthing() {

	return (
		<UploadDropzone
			endpoint="pdfUploader"
			onClientUploadComplete={(res) => {
				// Do something with the response
				console.log("Files: ", res);
				toast({
					title: "The file is uploaded",
					description: "Now uploading to Vector DB",
					action:(
					<ToastAction altText="close model"> close model</ToastAction>
					)
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
