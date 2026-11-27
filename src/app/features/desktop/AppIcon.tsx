"use client";

import Image from "next/image";
import { useWindowStore } from "@/app/store/window-store";

export default function AppIcon({
	id,
	img,
	name,
}: {
	id: AppId;
	img: string;
	name: string;
}) {
	const open = useWindowStore((state) => state.open);

	return (
		<button
			type="button"
			className="flex flex-col items-center gap-2 w-18 my-2 mx-4 text-lg text-outline"
			onClick={() => open(id)}
		>
			<Image src={img} alt={name} width={64} height={64} />
			<p className="font-mono text-center">{name}</p>
		</button>
	);
}
