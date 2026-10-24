import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { CERTIFICATIONS, EDUCATION } from "../data";

export const Education = () => (
	<Section id="education" title="Education">
		<ul className="space-y-7">
			{EDUCATION.map((item, index) => (
				<li key={item.degree}>
					<Reveal delay={index * 0.04}>
						<h3 className="text-[16px] font-semibold tracking-[-0.01em] text-ink">
							{item.degree}
						</h3>
						<p className="mt-1 text-[13px] text-soft">
							{item.school} · {item.period}
						</p>
						<p className="mt-1.5 text-[13.5px] text-body">{item.note}</p>
					</Reveal>
				</li>
			))}
		</ul>

		<Reveal>
			<div className="mt-9 border-t border-line pt-7">
				<p className="text-[11.5px] tracking-[0.08em] text-soft uppercase">
					Certifications
				</p>
				<p className="mt-2 text-[13.5px] leading-relaxed text-body">
					{CERTIFICATIONS.join(" · ")}
				</p>
			</div>
		</Reveal>
	</Section>
);
