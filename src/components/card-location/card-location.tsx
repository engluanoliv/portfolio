import { PinContainer } from "@/ui/shadcn/components/ui/3d-pin";
import Image from "next/image";
import { JSX } from "react";

export default function CardLocation(): JSX.Element {
	return (
		<>
			<div className="w-auto sm:w-sm flex items-center justify-center ">
				<PinContainer title="Juazeiro do Norte - CE">
					<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
						{/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
						<div className="flex flex-1 w-full rounded-lg mt-4 ">
							<Image
								src="/ceara.svg"
								fill
								className="object-cover"
								alt="Ceará"
							/>
						</div>
					</div>
				</PinContainer>
			</div>
		</>
	);
}
