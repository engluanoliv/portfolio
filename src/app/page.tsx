import DynamicIcon from "@/ui/shadcn/components/ui/dynamic-icon";
import { Dock, DockIcon } from "@/ui/shadcn/components/magicui/dock";
import Link from "next/link";
import { DOCK_DATA } from "./data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/shadcn/components/ui/button";
import { SmoothCursor } from "@/ui/shadcn/components/ui/smooth-cursor";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/ui/shadcn/components/ui/avatar";
import { Separator } from "@/ui/shadcn/components/ui/separator";
import CardAbout from "@/components/card-about/card-about";

export default function Home() {
	return (
		<>
			<CardAbout />
		</>
	);
}
