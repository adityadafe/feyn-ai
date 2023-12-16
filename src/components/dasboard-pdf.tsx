export default function DashBoardPdf({ data }: { data: filetype[] }) {
	return (
		<>
			<div className='mt-[5vh] grid grid-cols-4 gap-16 mx-12'>
				{data.map((el) => <div className='text-white border-2 border-dotted border-white rounded-lg lg:h-[10vh] lg:w-[20vw] flex items-center justify-center text-center' key={el.id}>
					<span className="font-black text-xl"> {el.name} </span>
				</div>)}
			</div>
		</>
	)

}
