type WindowState = {
  id: string;                 // crypto.randomUUID()
  app: AppId;
  x: number; y: number;       // px, relative to window layer
  w: number; h: number;
  z: number;
  isMaximized: boolean;
  restore?: { x: number; y: number; w: number; h: number }; // for un-maximize
};