export default function Button({ children }: { children: React.ReactNode }) {
	return (
		<button
			type="button"
			className="flex items-center gap-2 w-fit h-fit px-4 py-1 border-2 border-t-white border-l-white border-b-outline border-r-outline"
		>
			{children}
		</button>
	);
}
