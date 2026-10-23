import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { EXPERIENCES } from "../data";

export const Experience = () => (
	<Section id="experience" index="02" kicker="career" title="Experience">
		<ol className="space-y-3.5 sm:space-y-4">
			{EXPERIENCES.map((experience, index) => {
				const isLast = index === EXPERIENCES.length - 1;

				return (
					<li
						key={`${experience.company}-${experience.period}`}
						className="relative sm:pl-9"
					>
						{/* connector to the next entry, so the rail never hangs past the last dot */}
						{!isLast && (
							<span
								aria-hidden="true"
								className="absolute top-7 bottom-[-1rem] left-[5px] hidden w-px bg-line sm:block"
							/>
						)}
						<span
							aria-hidden="true"
							className="absolute top-7 left-0 hidden h-[11px] w-[11px] rounded-full border-2 border-accent bg-bg sm:block"
						/>

						<Reveal delay={index * 0.06}>
							<article className="card card-hover p-4 sm:p-5">
								<div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
									<div className="min-w-0">
										<h3 className="text-[15px] font-semibold tracking-tight text-fg">
											{experience.role}
										</h3>
										<p className="mt-1 font-mono text-[12px] text-accent">
											{experience.company}
										</p>
									</div>
									<span className="tag shrink-0 sm:ml-auto">
										{experience.period}
									</span>
								</div>

								<p className="mt-3 text-[13.5px] leading-relaxed text-muted">
									{experience.description}
								</p>

								<ul className="mt-4 flex flex-wrap gap-1.5">
									{experience.tags.map((tag) => (
										<li key={tag} className="tag">
											{tag}
										</li>
									))}
								</ul>
							</article>
						</Reveal>
					</li>
				);
			})}
		</ol>
	</Section>
);
