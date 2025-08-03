import type { Metadata } from "next";
import "./globals.css";

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
			<body>{children}</body>
		</html>
	);
}
