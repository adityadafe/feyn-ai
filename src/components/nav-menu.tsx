'use client'
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function NavMenu({
	info,
}: {
	info: {
		email?: string | null | undefined;
		image?: string | null | undefined;
		name?: string | null | undefined;
	};
}) {

	return (
		<DropdownMenu >
			<DropdownMenuTrigger asChild>
				<Button>
					<img
						src={info?.image as string}
						alt="User Image"
						width={50}
						height={50}
						className="rounded-3xl mr-3 mt-12"
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="lg:w-56 w-36 bg-zinc-900/50 mr-[4vh] mt-[1vh]">
				<DropdownMenuLabel className="text-white font-recoleta lg:text-xl">Hi {info?.name} !</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<Link href="/">
					<DropdownMenuItem className="text-white font-recoleta ">
						Home
					</DropdownMenuItem>
				</Link>

				<Link href="/dashboard">
					<DropdownMenuItem className="text-white font-recoleta">
						Dashboard
					</DropdownMenuItem>
				</Link>

				<Link href="/explain">
					<DropdownMenuItem className="text-white font-recoleta">
						Explain
					</DropdownMenuItem>
				</Link>

				<DropdownMenuItem onClick={() => signOut()} className="text-white">
					Log out
				</DropdownMenuItem>

			</DropdownMenuContent>
		</DropdownMenu>
	);
}

