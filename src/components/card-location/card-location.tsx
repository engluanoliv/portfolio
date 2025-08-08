import { PinContainer } from "@/ui/shadcn/components/ui/3d-pin";
import Image from "next/image";
import { JSX } from "react";

export default function CardLocation(): JSX.Element {
	return (
		<>
			<div className="w-[322px] flex justify-center aspect-[3/4] items-stretch rounded-[16px] border-0">
				<PinContainer title="Juazeiro do Norte - CE">
					<div
						className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[322px] h-[464px]"
						style={{
							boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
							opacity: 1,
						}}
					>
						{/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
						<div className="flex flex-1 justify-end w-[322px] !h-[464px] rounded-lg aspect-[3/4]">
							<img src="/ceara.svg" className="self-end w-full" alt="Ceará" />
						</div>
					</div>
				</PinContainer>
			</div>
		</>
	);
}
