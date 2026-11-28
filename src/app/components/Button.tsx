type ButtonSize = "sm" | "md" | "lg";

const sizeClasses: Record<ButtonSize, string> = {
	sm: "h-5 w-5 justify-center p-0 text-sm leading-none",
	md: "w-fit h-fit px-4 py-1",
	lg: "w-fit h-fit px-6 py-2",
};

export default function Button({
	children,
	className,
	onClick,
	size = "md",
}: {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	size?: ButtonSize;
}) {
	return (
		<button
			type="button"
			className={`flex items-center gap-2 border-2 border-t-white border-l-white border-b-outline border-r-outline ${sizeClasses[size]} ${className || ""}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
