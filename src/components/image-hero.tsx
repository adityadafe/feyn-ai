import Image from "next/image"

export default function HeroImage() {
	return (
		<>
			<Image
				className="animate-bounce lg:h-[400px] lg:w-[400px]"
				src="/hero.png"
				alt="Hero Png"
				width={200}
				height={200}
			/>
		</>
	)
}
