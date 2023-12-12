'use client'
import Spline from '@splinetool/react-spline'

export default function HeroComponent() {
	// lg:scale-50 scale-50
	return (
		<div className='lg:h-[67vh] lg:w-[25vw] h-[60vh] w-[100vw]  lg:scale-100 scale-100'>
			<Spline scene='/spline/chips.spline'
			/>
		</div>
	)
}
