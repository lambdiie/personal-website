type AppType = "inline" | "iframe";

type AppId = "home" | "projects" | "videos" | "art";

interface AppMeta {
	name: string;
	icon: string; // /public path
	route: string; // /apps/<slug>
	initialPosition: { x: number; y: number };
	initialSize: { w: number; h: number };
	type: AppType; // inline/iframe
	singleton?: boolean; // reuse existing window instead of opening another
}
