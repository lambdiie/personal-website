import AppContainer from "@/app/features/desktop/AppContainer";
import WindowContainer from "@/app/features/desktop/WindowContainer";
import Taskbar from "@/app/features/taskbar/Taskbar";

export default function Home() {
	return (
		<div className="font-mono flex flex-col w-full h-dvh overflow-hidden">
			<main className="bg-light-blue grow min-h-0 w-full relative">
				<WindowContainer />
				<AppContainer />
			</main>
			<footer className="bg-blue shrink-0 border-t-2 border-t-outline w-full">
				<Taskbar />
			</footer>
		</div>
	);
}
