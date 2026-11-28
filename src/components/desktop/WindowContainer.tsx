"use client";

import { useWindowStore } from "@/store/window-store";
import Window from "./Window";

export default function WindowContainer() {
	const windows = useWindowStore((state) => state.windows);

	return (
		<div>
			{Object.values(windows).map((window) => (
				<Window key={window.id} {...window} />
			))}
		</div>
	);
}
