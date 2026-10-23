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
								className="group block py-6"
							>
								<p className="text-[15.5px] font-semibold text-ink">
									{project.title}
									{project.inDevelopment && (
										<span className="chip ml-2 align-middle text-[11px]">
											WIP
										</span>
									)}
								</p>

								<p className="mx-auto mt-1.5 max-w-[52ch] text-[13.5px] leading-relaxed text-body">
									{project.description}
								</p>

								<p className="mt-2 text-[12px] text-soft">
									{project.tags.join(" · ")}
								</p>

								<p className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent">
									Visit
									<ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</p>
							</a>
						</Reveal>
					</li>
				);
			})}
		</ul>
	</Section>
);
