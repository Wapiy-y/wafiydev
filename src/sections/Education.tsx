import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { CERTIFICATIONS, EDUCATION } from "../data";

export const Education = () => (
	<Section id="education" title="Education">
		<ul className="space-y-8">
			{EDUCATION.map((item, index) => (
				<li key={item.degree}>
					<Reveal delay={index * 0.04}>
						<h3 className="text-[16px] font-semibold tracking-[-0.01em] text-ink">
							{item.degree}
						</h3>
						<p className="mt-1 text-[13px] text-soft">
							{item.school} · {item.period}
						</p>
						<p className="mt-2 text-[13.5px] text-body">{item.note}</p>
					</Reveal>
				</li>
			))}
		</ul>

		<Reveal>
			<div className="mt-8 border-t border-line pt-6">
				<p className="text-[13.5px] font-semibold text-ink">Certifications</p>
				<ul className="mt-2 list-disc space-y-1.5 pl-5 text-[14px] leading-relaxed text-body marker:text-[#c9c9d1]">
					{CERTIFICATIONS.map((cert) => (
						<li key={cert}>{cert}</li>
					))}
				</ul>
			</div>
		</Reveal>
	</Section>
);
