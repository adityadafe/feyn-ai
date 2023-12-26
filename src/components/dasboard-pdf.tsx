'use client'

import { useRouter } from "next/navigation"

export default function DashBoardPdf({ data }: { data: filetype[] }) {
	const router = useRouter()
	return (
		<>
			<div className='mt-[5vh] grid lg:grid-cols-4 lg:gap-16 mx-12 gap-8 grid-cols-1'>
				{data.map((el) => <div className='text-white border-2 border-dotted border-white rounded-lg lg:h-[10vh] lg:w-[20vw] flex items-center justify-center text-center' key={el.id} onClick={() => router.push(`/dashboard/${el.id}`)}>
					<span className="font-black text-xl" > {el.name} </span>
				</div>)}
			</div>
		</>
	)

}
