import Image from "next/image";

export default function AppIcon({ img, name }: { img: string; name: string }) {
	return (
		<button
			type="button"
			className="flex flex-col items-center gap-2 w-18 my-2 mx-4 text-lg text-outline"
		>
			<Image src={img} alt={name} width={64} height={64} />
			<p className="font-mono text-center">{name}</p>
		</button>
	);
}
