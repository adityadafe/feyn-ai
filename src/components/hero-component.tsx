'use client'
import Spline from '@splinetool/react-spline'

export default function HeroComponent() {
	// lg:scale-50 scale-50
	return (
		<div className='h-[50vh] w-[25vw] '>
			<Spline scene='/spline/cube.spline'
				className=''
			/>
		</div>
	)
}
