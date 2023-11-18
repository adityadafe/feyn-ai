'use client'
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroImage() {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(
		mouseYSpring,
		[-0.5, 0.5],
		["17.5deg", "-17.5deg"]
	);

	const rotateY = useTransform(
		mouseXSpring,
		[-0.5, 0.5],
		["-17.5deg", "17.5deg"]
	);

	const handleMouseMove = (e: any) => {
		const rect = e.target.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;
		x.set(xPct);
		y.set(yPct);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				rotateY,
				rotateX,
				transformStyle: "preserve-3d",
			}}
			className="relative lg:h-[380px] lg:w-[400px] h-[200px] w-[200px] rounded-xl bg-slate-300/50 "
		>
			<p
				style={{
					transform: "translateZ(50px)",
				}}
				className="text-center text-2xl font-bold"
			>
				<Image
					className=" lg:h-[400px] lg:w-[400px]"
					src="/hero.png"
					alt="Hero Png"
					width={200}
					height={200}
				/>
			</p>
		</motion.div>

	)
}
