export default function Window({
	id,
	app,
	x,
	y,
	w,
	h,
	z,
	isMaximized,
}: WindowState) {
	return (
		<div
			style={{ left: x, top: y, width: w, height: h, zIndex: z }}
			className="border-2 border-outline absolute"
			role="dialog"
			aria-labelledby={`titlebar-${id}`}
			aria-modal={false}
		>
			<h1 id={`titlebar-${id}`}>{app}</h1>
			<iframe src="https://google.com" title={app} />
		</div>
	);
}
