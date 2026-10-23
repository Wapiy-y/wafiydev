import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { PROJECTS } from "../data";

export const Projects = () => (
	<Section id="projects" title="Projects">
		<ul className="border-t border-line">
			{PROJECTS.map((project, index) => {
				const href = project.url ?? project.link;

				return (
					<li key={project.title} className="border-b border-line">
						<Reveal delay={index * 0.04}>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-start justify-between gap-6 py-5"
							>
								<div className="min-w-0">
									<p className="flex items-center gap-2 text-[15.5px] font-semibold text-ink">
										{project.title}
										{project.inDevelopment && (
											<span className="chip text-[11px]">WIP</span>
										)}
									</p>
									<p className="mt-1.5 text-[13.5px] leading-relaxed text-body">
										{project.description}
									</p>
									<p className="mt-2 text-[12px] text-soft">
										{project.tags.join(" · ")}
									</p>
								</div>

								<ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-soft transition-colors group-hover:text-accent" />
							</a>
						</Reveal>
					</li>
				);
			})}
		</ul>
	</Section>
);
