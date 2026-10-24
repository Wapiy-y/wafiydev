import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Reveal } from "../components/Reveal";
import { HERO } from "../data";

export const Contact = () => (
	<section
		id="contact"
		className="shell scroll-mt-24 pb-20 text-center sm:pb-28"
	>
		<Reveal>
			<h2 className="text-[clamp(1.45rem,3.1vw,1.875rem)] font-extrabold tracking-[-0.03em] text-ink">
				Let&apos;s talk
			</h2>

			<p className="mx-auto mt-4 max-w-[44ch] text-[15px] leading-7 text-body">
				Open to backend and full-stack roles. Email is best.
			</p>

			<div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-6">
				<a
					href={`mailto:${HERO.email}`}
					className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 text-[14px] font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
				>
					<Mail className="h-4 w-4" />
					Email me
				</a>

				<div className="flex items-center gap-6">
					<a
						href={HERO.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-[14px] text-body transition-colors hover:text-ink"
					>
						<FaLinkedin className="h-4 w-4" />
						LinkedIn
					</a>

					<a
						href={HERO.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-[14px] text-body transition-colors hover:text-ink"
					>
						<FaGithub className="h-4 w-4" />
						GitHub
					</a>
				</div>
			</div>
		</Reveal>
	</section>
);
