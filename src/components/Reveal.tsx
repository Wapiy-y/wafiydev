import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
	children: ReactNode;
	className?: string;
	delay?: number;
}

export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
	const reduced = useReducedMotion();

	if (reduced) return <div className={className}>{children}</div>;

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 8 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
};
