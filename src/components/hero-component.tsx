'use client'
import Spline from '@splinetool/react-spline'

export default function HeroComponent() {
	// lg:scale-50 scale-50
	return (
		<div className='lg:h-[50vh] lg:w-[25vw] h-[60vh] w-[100vw]  lg:scale-75 scale-50'>
			<Spline scene='/spline/cube.spline'
			/>
		</div>
	)
}
