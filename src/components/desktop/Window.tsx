"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import { Rnd } from "react-rnd";
import Button from "@/components/ui/Button";
import { useWindowStore } from "@/store/window-store";

export default function Window({ id, appMeta }: WindowProps) {
	const z = useWindowStore((state) => state.order.indexOf(id) + 1);
	const close = useWindowStore((state) => state.close);
	const focus = useWindowStore((state) => state.focus);

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
			onPointerDown={() => focus(id)}
		>
			<div
				className="border-2 border-outline bg-blue flex flex-col w-full h-full"
				role="dialog"
				aria-labelledby={`titlebar-${id}`}
				aria-modal={false}
			>
				<div className="flex items-center justify-between border-b-2 border-outline px-2 bg-blue">
					<div className="flex items-center gap-2">
						<Image
							className="[image-rendering:pixelated] shrink-0"
							src={appMeta.icon}
							alt=""
							width={16}
							height={16}
						/>
						<h1 id={`titlebar-${id}`}>{appMeta.name}</h1>
					</div>
					<div className="flex items-center gap-2">
						<Button size="sm" onClick={() => close(id)}>
							<X size={12} />
						</Button>
					</div>
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
