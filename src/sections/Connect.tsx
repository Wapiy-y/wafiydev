import { HERO } from "../data";

const link =
	"text-accent underline decoration-accent/40 underline-offset-[3px] transition-colors hover:decoration-accent";

export const Connect = () => (
	<section id="connect" className="shell pb-16 sm:pb-24">
		<div className="mx-auto max-w-[620px]">
			<h2 className="text-[16px] font-semibold text-ink sm:text-[16.5px]">
				Where to find me:
			</h2>

			<p className="mt-5 text-[15.5px] leading-[1.9] text-soft">
				<a href={`mailto:${HERO.email}`} className={link}>
					email
				</a>
				<span aria-hidden="true"> / </span>
				<a
					href={HERO.github}
					target="_blank"
					rel="noopener noreferrer"
					className={link}
				>
					github
				</a>
				<span aria-hidden="true"> / </span>
				<a
					href={HERO.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					className={link}
				>
					linkedin
				</a>
			</p>

			<p className="mt-3 text-[13px] text-soft">
				Open to backend and full-stack roles. Email is best.
			</p>
		</div>
	</section>
);
