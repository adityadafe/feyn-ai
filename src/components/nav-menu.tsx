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
		<DropdownMenu>
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
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Hi !! {info?.name}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Button variant="link" onClick={() => signOut()}>
						Log out
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

