import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { HERO, PROJECTS } from "../data";

const hostOf = (href: string) => {
	try {
		return new URL(href).hostname.replace(/^www\./, "");
	} catch {
		return href;
	}
};

const GithubCard = () => (
	<a
		href={HERO.github}
		target="_blank"
		rel="noopener noreferrer"
		className="card flex h-full flex-col justify-between gap-5 border-dashed p-5 transition-colors hover:border-accent-line hover:bg-card-hi"
	>
		<div className="flex items-center gap-2.5">
			<span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-bg-soft text-faint">
				<FaGithub className="h-4 w-4" />
			</span>
			<div>
				<p className="text-[15px] font-semibold tracking-tight text-fg">
					More on GitHub
				</p>
				<p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
					source code
				</p>
			</div>
		</div>

		<p className="text-[13.5px] leading-relaxed text-muted">
			Smaller tools, experiments and works in progress live in my repositories.
		</p>

		<span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-accent">
			github.com/Wapiy-y
			<ArrowUpRight className="h-3.5 w-3.5" />
		</span>
	</a>
);

export const Projects = () => (
	<Section id="projects" index="03" kicker="builds" title="Projects">
		<div className="grid gap-4 sm:grid-cols-2">
			{PROJECTS.map((project, index) => {
				const href = project.url ?? project.link;

				return (
					<Reveal key={project.title} delay={index * 0.06} className="min-w-0">
						<article className="card card-hover group flex h-full min-w-0 flex-col overflow-hidden">
							<div className="p-5">
								<div className="flex items-start justify-between gap-3">
									<div className="flex items-center gap-2.5">
										<span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-bg-soft text-accent">
											<FolderGit2 className="h-4 w-4" />
										</span>
										<div className="min-w-0">
											<h3 className="truncate text-[15px] font-semibold tracking-tight text-fg">
												{project.title}
											</h3>
											<p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
												web app
											</p>
										</div>
									</div>

									{project.inDevelopment && (
										<span className="tag shrink-0 border-[#f0b429]/30 text-[#f0b429]">
											WIP
										</span>
									)}
								</div>

								<p className="mt-4 text-[13.5px] leading-relaxed text-muted">
									{project.description}
								</p>

								<ul className="mt-4 flex flex-wrap gap-1.5">
									{project.tags.map((tag) => (
										<li key={tag} className="tag">
											{tag}
										</li>
									))}
								</ul>
							</div>

							<div className="mt-auto flex items-center justify-between gap-3 border-t border-line px-5 py-3">
								<span className="min-w-0 flex-1 truncate font-mono text-[11px] text-faint">
									{href ? hostOf(href) : "—"}
								</span>
								{href && (
									<a
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										className="-my-2 inline-flex shrink-0 items-center gap-1.5 py-2 font-mono text-[12px] text-accent transition-colors hover:text-fg"
									>
										Visit
										<span className="sr-only"> {project.title}</span>
										<ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									</a>
								)}
							</div>
						</article>
					</Reveal>
				);
			})}

			{PROJECTS.length % 2 === 1 && (
				<Reveal delay={PROJECTS.length * 0.06} className="min-w-0">
					<GithubCard />
				</Reveal>
			)}
		</div>
	</Section>
);
