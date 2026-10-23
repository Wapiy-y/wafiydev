import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Reveal } from "../components/Reveal";
import { HERO } from "../data";

export const Contact = () => (
	<section id="contact" className="scroll-mt-20 pb-16 sm:pb-20">
		<div className="shell">
			<Reveal>
				<div className="card relative overflow-hidden p-6 sm:p-9">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full opacity-70 blur-3xl"
						style={{
							background:
								"radial-gradient(circle at 50% 50%, var(--glow-a), transparent 70%)",
						}}
					/>

					<div className="relative max-w-[62ch]">
						<p className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-faint">
							<span className="text-accent">04</span>
							<span aria-hidden="true" className="text-line-strong">
								/
							</span>
							<span>contact</span>
						</p>

						<h2 className="mt-3 text-[clamp(1.6rem,4vw,2.35rem)] font-semibold tracking-[-0.025em] text-fg">
							Let&apos;s talk.
						</h2>

						<p className="mt-3 text-[14px] leading-7 text-muted sm:text-[15px]">
							Open to backend and full-stack roles. Email is best.
						</p>

						<div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
							<a
								href={`mailto:${HERO.email}`}
								className="btn btn-primary w-full sm:w-auto"
							>
								<Mail className="h-4 w-4" />
								Email me
							</a>
							<a
								href={HERO.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-ghost w-full sm:w-auto"
							>
								<FaLinkedin className="h-4 w-4" />
								LinkedIn
							</a>
							<a
								href={HERO.github}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-ghost w-full sm:w-auto"
							>
								<FaGithub className="h-4 w-4" />
								GitHub
							</a>
						</div>

						<p className="mt-7 flex items-center gap-1.5 font-mono text-[11.5px] text-faint">
							<MapPin className="h-3.5 w-3.5" />
							{HERO.location}
							<span aria-hidden="true" className="mx-1 text-line-strong">
								·
							</span>
							{HERO.availabilityText}
						</p>
					</div>
				</div>
			</Reveal>
		</div>
	</section>
);
