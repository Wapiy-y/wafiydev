import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { EXPERIENCES } from "../data";

export const Experience = () => (
	<Section id="experience" title="Work Experience">
		<ol className="space-y-10 sm:space-y-12">
			{EXPERIENCES.map((experience, index) => (
				<li key={`${experience.company}-${experience.period}`}>
					<Reveal
						delay={index * 0.04}
						className="mx-auto max-w-[560px] text-left"
					>
						<h3 className="text-[16px] font-semibold tracking-[-0.01em] text-ink sm:text-[17px]">
							{experience.role} <span className="font-normal text-soft">@</span>{" "}
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
			))}
		</ol>
	</Section>
);
