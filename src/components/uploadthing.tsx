'use client'

import { UploadDropzone } from "@/lib/uploadthing";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Uploadthing() {

	const router = useRouter()
	return (
		<>
			<UploadDropzone
				endpoint="pdfUploader"
				onClientUploadComplete={(res) => {
					toast.success('File upload complete')
					router.refresh()
					// @ts-ignore
					router.push(`/dashboard/${res[0].serverData.createdFile.id}`)
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
