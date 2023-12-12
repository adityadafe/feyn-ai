'use client'
import Spline from '@splinetool/react-spline'

export default function HeroComponent() {
	// lg:scale-50 scale-50
	return (
		<div className='lg:h-[67vh] lg:w-[25vw] h-[30vh] w-[100vw] lg:mb-[20vh]  lg:scale-50 scale-[0.2] mb-[20vh] mr-[17vh]'>
			<Spline scene='/spline/cubic.spline'
			/>
		</div>
	)
}
