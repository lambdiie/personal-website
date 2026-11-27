import Image from "next/image";
import Button from "@/app/components/Button";

export default function Taskbar() {
	return (
		<div className="flex justify-between py-2 px-4">
			<Button>
				<Image src={"/racket.png"} alt={""} width={24} height={24} />
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
		</div>
	);
}
