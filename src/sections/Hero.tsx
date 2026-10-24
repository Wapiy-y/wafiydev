import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Reveal } from "../components/Reveal";
import { HERO } from "../data";

export const Hero = () => (
	<section
		id="about"
		className="shell overflow-x-clip pt-12 pb-14 text-center sm:pt-16 sm:pb-16"
	>
		<Reveal>
			<img
				src={HERO.avatar}
				alt={`${HERO.name}, software engineer`}
				loading="eager"
				decoding="async"
				className="mx-auto h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
			/>
		</Reveal>

		<Reveal delay={0.05}>
			<h1 className="mt-6 text-[clamp(2rem,5.6vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink">
				Hey, I&apos;m {HERO.name}.
			</h1>

			<p className="mx-auto mt-4 max-w-[46ch] text-[15px] leading-7 text-body sm:text-base sm:leading-[1.7]">
				{HERO.bio}
			</p>

			<p className="mt-4 flex items-center justify-center gap-2 text-[13px] text-body">
				<span className="dot" />
				{HERO.availabilityText} · {HERO.location}
			</p>

			<div className="mt-6 flex items-center justify-center gap-3">
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
	</section>
);
