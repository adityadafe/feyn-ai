import Image from "next/image"
import { Button } from "./ui/button"

export default function Navbar() {
	return (
		<>
			<header className="flex items-center justify-between">
				<div className="flex flex-row items-center mt-5 ml-5">
					<Image
						height={75}
						width={75}
						src="/logo.png"
						alt="This is logo"
					/>
					<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-900/50 ml-2 text-5xl font-recoleta lg:ml-5">
						Feyn!
					</span>
				</div>
				<div className="items-center">
					<Button variant="ghost" className="text-white font-recoleta mr-5 text-2xl mt-5 lg:mt-0"> Login</Button>
				</div>
			</header>
		</>
	)
}
