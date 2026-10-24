import { HERO, PROJECTS } from "../data";

const link =
	"font-medium text-accent underline decoration-accent/40 underline-offset-[3px] transition-colors hover:decoration-accent";

export const Projects = () => (
	<section id="projects" className="shell pb-14 sm:pb-20">
		<div className="mx-auto max-w-[620px]">
			<h2 className="text-[16px] font-semibold text-ink sm:text-[16.5px]">
				Things I&apos;ve built:
			</h2>

			<div className="mt-5 space-y-5">
				{PROJECTS.map((project) => {
					const href = project.url ?? project.link;

					return (
						<div key={project.title}>
							<p className="text-[15.5px] leading-[1.7] text-body">
								<a
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className={link}
								>
									{project.title}
								</a>
								<span className="text-soft"> — </span>
								{project.description}
								{project.inDevelopment && (
									<span className="text-soft"> (in progress)</span>
								)}
							</p>
							<p className="mt-1 text-[13px] text-soft">
								{project.tags.join(" · ")}
							</p>
						</div>
					);
				})}

				<p className="text-[15.5px] leading-[1.7] text-body">
					<a
						href={HERO.github}
						target="_blank"
						rel="noopener noreferrer"
						className={link}
					>
						More on GitHub
					</a>
					<span className="text-soft"> — smaller tools and experiments.</span>
				</p>
			</div>
		</div>
	</section>
);
