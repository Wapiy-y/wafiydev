import type { ReactNode } from "react";

interface SectionProps {
	id: string;
	index: string;
	kicker: string;
	title: string;
	children: ReactNode;
}

export const Section = ({
	id,
	index,
	kicker,
	title,
	children,
}: SectionProps) => (
	<section id={id} className="scroll-mt-20 py-9 sm:py-12 lg:py-14">
		<div className="shell">
			<div className="mb-7 flex items-end gap-5 sm:mb-9">
				<div>
					<p className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-faint">
						<span className="text-accent">{index}</span>
						<span aria-hidden="true" className="text-line-strong">
							/
						</span>
						<span>{kicker}</span>
					</p>
					<h2 className="mt-2 text-[clamp(1.45rem,3.6vw,2rem)] font-semibold tracking-[-0.02em] text-fg">
						{title}
					</h2>
				</div>
				<div
					aria-hidden="true"
					className="section-rule mb-2.5 hidden h-px flex-1 sm:block"
				/>
			</div>

			{children}
		</div>
	</section>
);
