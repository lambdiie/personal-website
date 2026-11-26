export const APPS = {
	home: {
		name: "Home",
		icon: "/racket.png",
		route: "/apps/home",
		initialSize: { w: 480, h: 360 },
		type: "inline",
		singleton: true,
	},
	projects: {
		name: "Projects",
		icon: "/github.png",
		route: "/apps/projects",
		initialSize: { w: 560, h: 420 },
		type: "iframe",
		singleton: true,
	},
	videos: {
		name: "Videos",
		icon: "/youtube.png",
		route: "/apps/videos",
		initialSize: { w: 560, h: 420 },
		type: "iframe",
		singleton: true,
	},
	art: {
		name: "Art",
		icon: "/instagram.png",
		route: "/apps/art",
		initialSize: { w: 560, h: 420 },
		type: "iframe",
		singleton: true,
	},
} as const satisfies Record<AppId, AppMeta>;
