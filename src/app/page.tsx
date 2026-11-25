import Image from "next/image";
import Button from "./components/Button";
import AppIcon from "./features/desktop/AppIcon";

import { APPS } from "./lib/apps";

export default function Home() {
	return (
		<div className="font-mono flex flex-col w-full h-dvh overflow-hidden">
			<main className="bg-light-blue grow min-h-0 w-full flex flex-col flex-wrap content-start overflow-y-auto p-4">
				{Object.values(APPS).map((app) => (
					<AppIcon img={app.icon} name={app.name} key={app.name} />
				))}
			</main>
			<footer className="bg-blue flex shrink-0 justify-between py-2 px-4 border-t-2 border-t-outline w-full">
				<Button>
					<Image src={"/racket.png"} alt={""} width={24} height={24}></Image>
					<p>Start</p>
				</Button>
				<div className="flex gap-2">
					<Button>
						<p>Date</p>
					</Button>
					<Button>
						<p>Time</p>
					</Button>
				</div>
			</footer>
		</div>
	);
}
