import { ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Reveal } from "../components/Reveal";
import { EXPERIENCES, HERO, TECH_STACK } from "../data";

const stats = [
	{ value: HERO.years, label: "years" },
	{ value: String(EXPERIENCES.length), label: "roles" },
	{ value: String(TECH_STACK.length), label: "tools" },
];

const socialLink =
	"flex items-center justify-between gap-3 rounded-lg border border-line bg-card-hi/40 px-3 py-2.5 text-[13px] text-muted transition-colors hover:border-accent-line hover:text-fg";

const ProfileCard = () => (
	<div className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:max-w-none">
		<div aria-hidden="true" className="profile-glow" />

		<div className="card overflow-hidden shadow-[var(--shadow)]">
			<div className="flex items-center gap-2 border-b border-line px-4 py-3">
				<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
				<span className="ml-2 font-mono text-[11px] text-faint">wafiy.tsx</span>
			</div>

			<div className="p-5 sm:p-6">
				<div className="flex items-center gap-4">
					<img
						src={HERO.avatar}
						alt={`${HERO.name}, software engineer`}
						loading="eager"
						decoding="async"
						className="h-16 w-16 shrink-0 rounded-2xl object-cover ring-1 ring-line-strong sm:h-[72px] sm:w-[72px]"
					/>
					<div className="min-w-0">
						<p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
							{HERO.role}
						</p>
						<p className="mt-1 truncate text-lg font-semibold tracking-tight text-fg">
							{HERO.name}
						</p>
						<p className="mt-0.5 truncate text-[12.5px] text-muted">
							Backend &amp; full-stack
						</p>
					</div>
				</div>

				<dl className="mt-6 grid grid-cols-3 divide-x divide-line rounded-lg border border-line bg-bg-soft/60 py-3">
					{stats.map((stat) => (
						<div key={stat.label} className="px-2 text-center">
							<dt className="sr-only">{stat.label}</dt>
							<dd>
								<span className="block font-mono text-base font-medium text-fg">
									{stat.value}
								</span>
								<span className="mt-0.5 block text-[10.5px] uppercase tracking-[0.12em] text-faint">
									{stat.label}
								</span>
							</dd>
						</div>
					))}
				</dl>

				<div className="mt-4 space-y-2">
					<a href={`mailto:${HERO.email}`} className={socialLink}>
						<span className="flex min-w-0 items-center gap-2.5">
							<Mail className="h-4 w-4 shrink-0" />
							<span className="truncate">{HERO.email}</span>
						</span>
						<ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-faint" />
					</a>
					<a
						href={HERO.github}
						target="_blank"
						rel="noopener noreferrer"
						className={socialLink}
					>
						<span className="flex min-w-0 items-center gap-2.5">
							<FaGithub className="h-4 w-4 shrink-0" />
							<span className="truncate">github.com/Wapiy-y</span>
						</span>
						<ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-faint" />
					</a>
					<a
						href={HERO.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className={socialLink}
					>
						<span className="flex min-w-0 items-center gap-2.5">
							<FaLinkedin className="h-4 w-4 shrink-0" />
							<span className="truncate">linkedin.com/in/abdullahwafiy</span>
						</span>
						<ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-faint" />
					</a>
				</div>
			</div>
		</div>
	</div>
);

export const Hero = () => (
	<section id="about" className="relative scroll-mt-20 overflow-x-clip">
		<div className="shell grid items-center gap-10 pt-12 pb-6 sm:pt-16 sm:pb-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-16 lg:pt-20 lg:pb-10">
			<Reveal className="min-w-0">
				{HERO.available && (
					<span className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3 py-1.5 font-mono text-[11px] text-accent">
						<span className="status-dot" />
						{HERO.availabilityText}
					</span>
				)}

				<h1
					id="hero-title"
					className="mt-6 text-[clamp(2.1rem,6.2vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-fg"
				>
					Hi, I go by <span className="name-gradient">{HERO.name}</span>
				</h1>

				<p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.1em] text-faint sm:text-[11.5px] sm:tracking-[0.16em]">
					{HERO.role}
					<span aria-hidden="true" className="mx-2 text-line-strong">
						·
					</span>
					Backend &amp; full-stack
				</p>

				<p className="mt-5 max-w-[52ch] text-[15px] leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8">
					{HERO.bio}
				</p>

				<div className="mt-8 flex flex-wrap items-center gap-3">
					<a href="#projects" className="btn btn-primary w-full sm:w-auto">
						View work
						<ArrowRight className="h-4 w-4" />
					</a>
					<a
						href={`mailto:${HERO.email}`}
						className="btn btn-ghost flex-1 sm:flex-none"
					>
						<Mail className="h-4 w-4" />
						Email me
					</a>
					<a
						href={HERO.github}
						target="_blank"
						rel="noopener noreferrer"
						className="icon-btn"
						aria-label="GitHub profile"
					>
						<FaGithub className="h-4 w-4" />
					</a>
				</div>

				<p className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12px] text-faint">
					<span className="inline-flex items-center gap-1.5">
						<MapPin className="h-3.5 w-3.5" />
						{HERO.location}
					</span>
					<span
						aria-hidden="true"
						className="hidden h-3 w-px bg-line sm:block"
					/>
					<span>go · typescript · postgres</span>
				</p>
			</Reveal>

			<Reveal delay={0.1} className="min-w-0">
				<ProfileCard />
			</Reveal>
		</div>
	</section>
);
