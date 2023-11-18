export default function DottedButton({ children }: { children: string }) {
	return (
		<button className="hover:mt-2 mt-2 lg:mt-0 hover:mx-2 w-fit font-recoleta lg:text-3xl rounded-2xl border-2 border-dashed border-white bg-zinc-900 px-2 py-2 font-semibold  text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
			{children}
		</button>
	);
};
