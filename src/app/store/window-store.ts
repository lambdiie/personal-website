import { create } from "zustand";
import { APPS } from "@/app/lib/apps";

interface WindowStore {
	windows: Record<string, WindowProps>;
	order: string[];
	focused: string | null;
	zCounter: number;

	open(app: AppId): void;
	// close(id: string): void;
	// focus(id: string): void;
	// minimize(id: string): void;
	// toggleMaximize(id: string): void;
}

export const useWindowStore = create<WindowStore>((set, get) => ({
	windows: {},
	order: [],
	focused: null,
	zCounter: 0,

	open(app) {
		const id = crypto.randomUUID();
		const { windows, order, zCounter } = get();
		const appMeta = APPS[app];

		set({
			windows: {
				...windows,
				[id]: {
					id,
					appMeta,
					z: zCounter + 1,
				},
			},
			order: [...order, id],
			focused: id,
			zCounter: zCounter + 1,
		});
	},
}));
