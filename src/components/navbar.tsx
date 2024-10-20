import { getServerSession } from "next-auth"
import NavMenu from "./nav-menu"
import LoginButton from "./ui/login-button"
import Link from "next/link"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function Navbar() {
	const session: {
		user: {
			name: string,
			image: string,
			email: string
		}
	} | null = await getServerSession(authOptions)


	return (
		<>
			<header className="flex items-center justify-between">
				<div className="flex flex-row items-center mt-5 ml-5">
					<Link href="/">
						<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300/50  ml-2 text-5xl font-recoleta lg:ml-5">
							Feyn!
						</span>
					</Link>
				</div>
				<div className="items-center">
					{
						session
							? <NavMenu info={session?.user} />
							: <LoginButton />
					}
				</div>
			</header>
		</>
	)
}
