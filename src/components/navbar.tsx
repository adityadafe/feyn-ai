'use client'

import NavMenu from "./nav-menu"
import { Button } from "./ui/button"
import { signIn, useSession, signOut } from "next-auth/react"

export default function Navbar() {
	const session = useSession()
	console.log(session)
	return (
		<>
			<header className="flex items-center justify-between">
				<div className="flex flex-row items-center mt-5 ml-5">
					<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300/50  ml-2 text-5xl font-recoleta lg:ml-5">
						Feyn!
					</span>
				</div>
				<div className="items-center">
					{session.data?.user ?
						<NavMenu info={session.data.user} />
						:
						<Button
							variant="ghost"
							className="text-white font-recoleta mr-5 text-2xl mt-5 lg:mt-0"
							onClick={() => signIn('github', { callbackUrl: '/' })}
						> Login</Button>

					}
				</div>
			</header>
		</>
	)
}
