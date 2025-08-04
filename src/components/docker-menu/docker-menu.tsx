"use client";

import { DOCK_DATA } from "@/app/data";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/ui/shadcn/components/magicui/dock";
import {
	Avatar,
	AvatarImage,
	AvatarFallback,
} from "@/ui/shadcn/components/ui/avatar";
import { buttonVariants } from "@/ui/shadcn/components/ui/button";
import { Navigation } from "@/ui/shadcn/components/ui/icon";
import { Separator } from "@/ui/shadcn/components/ui/separator";
import Link from "next/link";
import { JSX } from "react";

export default function DockerMenu(): JSX.Element {
	return (
		<>
			<Dock direction="middle">
				<DockIcon>
					<Link href={"/about"}>
						<Avatar>
							<AvatarImage src={"./avatar.svg"} />
							<AvatarFallback>CL</AvatarFallback>
						</Avatar>
					</Link>
				</DockIcon>
				<DockIcon>
					<Link href={"/location"}>
						<Navigation />
					</Link>
				</DockIcon>
				<Separator orientation="vertical" className="h-full" />
				{Object.entries(DOCK_DATA.contact.social).map(([name, social]) => (
					<DockIcon key={name}>
						<Link
							target="_blank"
							href={social.url}
							className={cn(
								buttonVariants({ variant: "ghost", size: "icon" }),
								"size-12 rounded-full",
							)}
						>
							<social.icon className="size-6" />
						</Link>
					</DockIcon>
				))}
			</Dock>
		</>
	);
}
