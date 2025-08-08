import { ContainerTextFlip } from "@/components/container-text-flip/container-text-flip";

export default function Home() {
	return (
		<div className="w-full">
			<p className="text-xl md:text-4xl font-medium w-full">Hello, I am a</p>
			<ContainerTextFlip
				words={["Software Engineer", "UI/UX Design", "Frontend Developer"]}
			/>
			{/* <CardAbout /> */}
		</div>
	);
}
