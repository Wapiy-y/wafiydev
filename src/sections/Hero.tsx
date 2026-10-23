import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Reveal } from "../components/Reveal";
import { HERO } from "../data";

export const Hero = () => (
	<section
		id="about"
		className="shell overflow-x-clip pt-10 pb-14 sm:pt-14 sm:pb-16"
	>
		<div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-12 lg:gap-16">
			<Reveal className="shrink-0">
				<img
					src={HERO.avatar}
					alt={`${HERO.name}, software engineer`}
					loading="eager"
					decoding="async"
					className="h-32 w-32 rounded-full object-cover sm:h-44 sm:w-44 lg:h-60 lg:w-60"
				/>
			</Reveal>

			<Reveal delay={0.05} className="min-w-0">
				<h1 className="text-[clamp(2rem,5.6vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink">
					Hey, I&apos;m {HERO.name}.
				</h1>

				<p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-body sm:text-base sm:leading-[1.7]">
					{HERO.bio}
				</p>

				<p className="mt-4 flex items-center gap-2 text-[13px] text-body">
					<span className="dot" />
					{HERO.availabilityText} · {HERO.location}
				</p>

				<div className="mt-6 flex items-center gap-2.5">
					<a
						href={HERO.github}
						target="_blank"
						rel="noopener noreferrer"
						className="social-chip"
						aria-label="GitHub"
					>
						<FaGithub className="h-[18px] w-[18px]" />
					</a>
					<a
						href={HERO.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="social-chip"
						aria-label="LinkedIn"
					>
						<FaLinkedin className="h-[18px] w-[18px]" />
					</a>
					<a
						href={`mailto:${HERO.email}`}
						className="social-chip"
						aria-label={`Email ${HERO.email}`}
					>
						<Mail className="h-[18px] w-[18px]" />
					</a>
				</div>
			</Reveal>
		</div>
	</section>
);
