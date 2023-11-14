import Link from "next/link";

export default function Footer() {
	return (
		<footer className="text-white font-recoleta text-xl flex justify-center gap-2 mt-2">
			built with
			<span className="font-mono">{" <3   "}</span>
			by
			<span className="font-extrabold">
				{" "}
				<Link href="https://github.com/KaKashi1210" target="_blank">
					kakashi
				</Link>
			</span>
		</footer>
	)
}
