import LoginButton from "./ui/login-button";

export default function NeedToLogin() {
	return (
		<>
			<div className="h-[88vh] w-[100vw] flex items-center justify-center flex-col ">
				<p className="text-white text-2xl font-recoleta mx-7">You need to be logged in to learn stuff</p>
				<div className="text-zinc-900 lg:mt-3 ">
					<LoginButton />
				</div>
			</div>
		</>
	)
}
