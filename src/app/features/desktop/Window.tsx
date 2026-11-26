import Image from "next/image";

interface WindowProps extends WindowState {
	icon: string,

}

export default function Window({
	id,
	app,
	x,
	y,
	w,
	h,
	z,
	icon,
	isMaximized,
}: WindowProps) {
	return (
		<div
			style={{ left: x, top: y, width: w, height: h, zIndex: z }}
			className="border-2 border-outline absolute p-2 flex flex-col gap-2"
			role="dialog"
			aria-labelledby={`titlebar-${id}`}
			aria-modal={false}
		>
			<div className="flex items-center gap-2 border-2 border-outline pl-2 bg-blue">
				<Image className="[image-rendering:pixelated]	shrink-0" src={icon} alt="" width={16} height={16} />
				<h1 id={`titlebar-${id}`}>
					{app}
				</h1>
			</div>
			<iframe
				src="https://www.youtube.com/embed/dQw4w9WgXcQ"
				title={app}
				className="w-full min-h-0 grow border-2 border-outline"
			/>
		</div>
	);
}
