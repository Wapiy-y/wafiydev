import type { ReactNode } from "react";

interface SectionProps {
	id: string;
	title: string;
	children: ReactNode;
}

export const Section = ({ id, title, children }: SectionProps) => (
	<section id={id} className="shell scroll-mt-24 pb-16 sm:pb-24">
		<h2 className="text-[clamp(1.45rem,3.1vw,1.875rem)] font-extrabold tracking-[-0.03em] text-ink">
			{title}
		</h2>
		<div className="mt-8 sm:mt-10">{children}</div>
	</section>
);
