"use client";

import Image from "next/image";
import { useCallback } from "react";
import { Rnd } from "react-rnd";

export default function Window({ id, appMeta, z }: WindowProps) {
	// Toggle pointer events on elements that may interfere with dragging
	const togglePointerEvents = useCallback((disable: boolean) => {
		const elements = document.querySelectorAll<HTMLElement>(
			"iframe, object, embed",
		);
		elements.forEach((el) => {
			el.style.pointerEvents = disable ? "none" : "auto";
		});
	}, []);

	return (
		<Rnd
			style={{ zIndex: z }}
			default={{
				x: appMeta.initialPosition.x,
				y: appMeta.initialPosition.y,
				width: appMeta.initialSize.w,
				height: appMeta.initialSize.h,
			}}
			minWidth={100}
			minheight={100}
			onDragStart={() => togglePointerEvents(true)}
			onDragStop={() => togglePointerEvents(false)}
			onResizeStart={() => togglePointerEvents(true)}
			onResizeStop={() => togglePointerEvents(false)}
		>
			<div
				className="border-2 border-outline bg-blue flex flex-col w-full h-full"
				role="dialog"
				aria-labelledby={`titlebar-${id}`}
				aria-modal={false}
			>
				<div className="flex items-center gap-2 border-b-2 border-outline pl-2 bg-blue">
					<Image
						className="[image-rendering:pixelated] shrink-0"
						src={appMeta.icon}
						alt=""
						width={16}
						height={16}
					/>
					<h1 id={`titlebar-${id}`}>{appMeta.name}</h1>
				</div>
				<iframe
					src="https://www.youtube.com/embed/dQw4w9WgXcQ"
					title={appMeta.name}
					className="w-full min-h-0 grow p-2"
				/>
			</div>
		</Rnd>
	);
}
