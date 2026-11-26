interface WindowProps {
	id: string; // crypto.randomUUID()
	app: AppId;
	x: number;
	y: number; // px, relative to window layer
	w: number;
	h: number;
	z: number;
	icon: string;
	isActive: boolean;
	// isMaximized: boolean;
	// restore?: { x: number; y: number; w: number; h: number }; // for un-maximize
}
