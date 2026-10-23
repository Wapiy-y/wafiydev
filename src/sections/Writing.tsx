import { ArrowUpRight, PenLine } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { BLOGS, HERO } from "../data";

export const Writing = () => (
	<Section id="writing" index="04" kicker="notes" title="Writing">
		<Reveal>
			{BLOGS.length > 0 ? (
				<ul className="card divide-y divide-line overflow-hidden">
					{BLOGS.map((blog) => (
						<li key={blog.link}>
							<a
								href={blog.link}
								className="group grid gap-2 px-4 py-4 transition-colors hover:bg-card-hi sm:grid-cols-[120px_minmax(0,1fr)_auto] sm:items-start sm:gap-5 sm:px-5"
							>
								<span className="font-mono text-[11px] text-faint">
									{blog.date}
								</span>
								<span className="min-w-0">
									<span className="block text-[14.5px] font-medium text-fg">
										{blog.title}
									</span>
									<span className="mt-1 block text-[13px] leading-relaxed text-muted">
										{blog.excerpt}
									</span>
								</span>
								<ArrowUpRight className="hidden h-4 w-4 text-faint transition-colors group-hover:text-accent sm:block" />
							</a>
						</li>
					))}
				</ul>
			) : (
				<div className="card flex flex-col items-start gap-5 p-5 sm:flex-row sm:items-center sm:p-6">
					<span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-bg-soft text-accent">
						<PenLine className="h-5 w-5" />
					</span>

					<div className="min-w-0 flex-1">
						<p className="text-[14.5px] font-medium text-fg">No posts yet</p>
						<p className="mt-1.5 max-w-[58ch] text-[13.5px] leading-relaxed text-muted">
							Notes on Go, APIs and shipping side projects are in the works.
							Until then, the code is public on GitHub.
						</p>
					</div>

					<a
						href={HERO.github}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-ghost h-10 shrink-0 px-4 text-[13px]"
					>
						Browse repos
						<ArrowUpRight className="h-3.5 w-3.5" />
					</a>
				</div>
			)}
		</Reveal>
	</Section>
);
