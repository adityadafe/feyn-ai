'use client'

import { useRouter } from "next/navigation"

export default function PdfDoesNotExist() {

	const router = useRouter()

	function pushToDashboard() {
		setTimeout(() => {
			router.push('/dashboard')
		}, 4000)
	}

	return (
		<>
			<div className="h-[88vh] w-[100vw] flex items-center justify-center flex-col " onMouseMove={() => pushToDashboard()}>
				<p className="text-white text-2xl font-recoleta mx-7" >Pdf does not exist plz try uploading another pdf</p>
			</div>

		</>
	)
}
