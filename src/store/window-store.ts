import { create } from "zustand";
import { APPS } from "@/lib/apps";

interface WindowStore {
	windows: Record<string, WindowProps>;
	order: string[];

	open(app: AppId): void;
	close(id: string): void;
	focus(id: string): void;
	// minimize(id: string): void;
	// toggleMaximize(id: string): void;
}

export const useWindowStore = create<WindowStore>((set, get) => ({
	windows: {},
	order: [],

	open(app) {
		const id = crypto.randomUUID();
		const { windows, order } = get();
		const appMeta = APPS[app];

		set({
			windows: {
				...windows,
				[id]: {
					id,
					appMeta,
				},
			},
			order: [...order, id],
		});
	},

	close(id) {
		const { windows, order } = get();
		const updatedWindows = { ...windows };
		delete updatedWindows[id];
		set({
			windows: updatedWindows,
			order: order.filter((winId) => winId !== id),
		});
	},

	focus(id) {
		const { order } = get();
		if (order[order.length - 1] === id) return;
		set({ order: [...order.filter((w) => w !== id), id] });
	},
}));
