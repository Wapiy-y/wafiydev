import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { CERTIFICATIONS, EDUCATION, EXPERIENCES } from "../data";

export const Experience = () => (
	<Section id="experience" index="02" kicker="work" title="Experience">
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
								<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
									{/* date first on phones, right-aligned from sm up */}
									<span className="tag w-fit shrink-0 sm:order-last">
										{experience.period}
									</span>
									<div className="min-w-0">
										<h3 className="text-[15px] font-semibold tracking-tight text-fg">
											{experience.role}
										</h3>
										<p className="mt-1 font-mono text-[12px] text-accent">
											{experience.company}
										</p>
									</div>
								</div>

								<ul className="mt-3 space-y-1.5">
									{experience.points.map((point) => (
										<li
											key={point}
											className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted"
										>
											<span
												aria-hidden="true"
												className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/70"
											/>
											{point}
										</li>
									))}
								</ul>

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

		<Reveal>
			<div className="mt-8">
				<p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-faint">
					Education
				</p>

				<div className="mt-3 grid gap-3 sm:grid-cols-2">
					{EDUCATION.map((item) => (
						<div key={item.degree} className="card p-4">
							<p className="text-[13.5px] font-medium text-fg">{item.degree}</p>
							<p className="mt-1 font-mono text-[11.5px] text-faint">
								{item.school} · {item.period}
							</p>
							<p className="mt-2 font-mono text-[11px] text-accent">
								{item.note}
							</p>
						</div>
					))}
				</div>

				<p className="mt-3 font-mono text-[11px] text-faint">
					Certs · {CERTIFICATIONS.join(" · ")}
				</p>
			</div>
		</Reveal>
	</Section>
);
