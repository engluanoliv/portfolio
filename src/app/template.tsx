"use client";

import { JSX, ReactNode } from "react";
import { motion } from "framer-motion";

export default function Template({
	children,
}: {
	children: ReactNode;
}): JSX.Element {
	return (
		<motion.div
			initial={{ rotateY: 720 }}
			animate={{
				rotateY: 0,
			}}
            exit={{rotateY: -720}}
			transition={{ ease: "easeInOut", duration: 0.8 }}
			style={{
				transformStyle: "preserve-3d",
			}}
		>
			{children}
		</motion.div>
	);
}
