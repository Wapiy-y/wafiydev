import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { EXPERIENCES } from "../data";

export const Experience = () => (
	<Section id="experience" title="Work Experience">
		<ol className="space-y-8 sm:space-y-9">
			{EXPERIENCES.map((experience, index) => {
				const isLast = index === EXPERIENCES.length - 1;

				return (
					<li
						key={`${experience.company}-${experience.period}`}
						className="relative pl-6 sm:pl-8"
					>
						{!isLast && (
							<span
								aria-hidden="true"
								className="absolute top-[15px] bottom-[-2.25rem] -left-[0.5px] w-px bg-[#cfcfd8]"
							/>
						)}
						<span
							aria-hidden="true"
							className="absolute top-[6px] left-[-4.5px] h-[9px] w-[9px] rounded-full bg-ink"
						/>

						<Reveal delay={index * 0.04}>
							<h3 className="text-[16px] font-semibold leading-snug tracking-[-0.01em] text-ink sm:text-[17px]">
								{experience.role}{" "}
								<span className="font-normal text-soft">@</span>{" "}
								<span className="font-medium text-accent">
									{experience.company}
								</span>
							</h3>

							<p className="mt-1 text-[13px] text-soft">{experience.period}</p>

							<ul className="mt-3 list-disc space-y-1.5 pl-5 text-[14px] leading-relaxed text-body marker:text-[#c9c9d1]">
								{experience.points.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>

							<p className="mt-3 text-[12px] text-soft">
								{experience.tags.join(" · ")}
							</p>
						</Reveal>
					</li>
				);
			})}
		</ol>
	</Section>
);
