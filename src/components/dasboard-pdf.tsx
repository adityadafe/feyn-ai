'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import toast, { Toaster } from 'react-hot-toast'

export default function DashBoardPdf() {
	const [data, setData] = useState([
		{ id: 1, name: 'Aditya' },
		{ id: 2, name: 'Aditya' },
		{ id: 3, name: 'Aditya' },
		{ id: 4, name: 'Aditya' },
		{ id: 5, name: 'Aditya' },
	])


	{/*
useEffect(() => {
		axios.get('/api/db').then(res => setData(res.data))
	}, [])
*/}

	return (
		<>
			<div className='mt-[5vh] grid grid-cols-4 gap-16 mx-12'>
				{data.map((el) => <div className='text-white border-2 border-dotted border-white rounded-lg lg:h-[10vh] lg:w-[20vw]' key={el.id}>{el.name}</div>)}
			</div>
		</>
	)


}
