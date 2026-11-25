import Image from "next/image";
import Button from "./components/Button";
import AppIcon from "./features/desktop/AppIcon";

import { APP_LIST_MAP } from "./lib/data";

export default function Home() {
	return (
		<div className="font-mono flex flex-col w-full h-dvh overflow-hidden">
			<main className="bg-blue-main grow min-h-0 w-full flex flex-col flex-wrap content-start overflow-y-auto p-4">
				{APP_LIST_MAP.map(([name, icon]) => (
					<AppIcon img={icon} name={name} key={name} />
				))}
			</main>
			<footer className="bg-red-main flex shrink-0 justify-between py-2 px-4 border-t-2 border-t-outline w-full">
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
