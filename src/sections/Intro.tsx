import { HERO } from "../data";

export const Intro = () => (
	<section id="about" className="shell pb-16 sm:pb-24">
		<div className="mx-auto max-w-[620px] text-center">
			<img
				src={HERO.avatar}
				alt={`${HERO.name}, software engineer`}
				loading="eager"
				decoding="async"
				className="mx-auto h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
			/>

			<p className="mt-6 text-[15.5px] text-soft italic sm:text-[16.5px]">
				{HERO.greeting}
			</p>

			<div className="mt-7 space-y-3.5 text-[15.5px] leading-[1.75] text-body sm:text-[16px]">
				{HERO.intro.map((line) => (
					<p key={line} className="text-balance">
						{line}
					</p>
				))}
			</div>

			{HERO.available && (
				<p className="mt-7 flex items-center justify-center gap-2 text-[13px] text-soft">
					<span className="dot" />
					{HERO.availabilityText} · {HERO.location}
				</p>
			)}
		</div>
	</section>
);
