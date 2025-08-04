import type { Metadata } from "next";
import "./globals.css";
import { SmoothCursor } from "@/ui/shadcn/components/ui/smooth-cursor";
import DockerMenu from "@/components/docker-menu/docker-menu";

export const metadata: Metadata = {
	icons: [{ url: "./avatar.svg" }],
	title: "Chico Luan",
	description: "My Personal Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{/* <SmoothCursor /> */}
				<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
					<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
						{children}
						<DockerMenu />
					</main>
				</div>
			</body>
		</html>
	);
}
