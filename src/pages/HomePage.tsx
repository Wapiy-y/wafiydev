import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { ComponentType } from "react";
import {
	SiDocker,
	SiExpress,
	SiGo,
	SiKubernetes,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedis,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { EXPERIENCES, HERO, PROJECTS, TECH_STACK } from "../data";

type IconComponent = ComponentType<{
	className?: string;
	style?: React.CSSProperties;
}>;

const TECH_ICONS: Record<string, IconComponent> = {
	TypeScript: SiTypescript,
	Go: SiGo,
	React: SiReact,
	"Tailwind CSS": SiTailwindcss,
	"Node.js": SiNodedotjs,
	"Express.js": SiExpress,
	PostgreSQL: SiPostgresql,
	Redis: SiRedis,
	Docker: SiDocker,
	Kubernetes: SiKubernetes,
};

export const HomePage = () => (
	<main className="section-padding pt-28 space-y-16">
		{/* Hero Section */}
		<section className="space-y-5">
			<div className="flex items-center gap-4">
				<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-black/10 dark:border-white/10 shrink-0">
					<img
						src={HERO.avatar}
						alt={HERO.name}
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="space-y-1">
					<h1 className="text-xl font-bold tracking-tight">{HERO.tagline}</h1>
					{HERO.available && (
						<div className="flex items-center gap-2 text-[12px] text-black/50 dark:text-white/50">
							<span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
							{HERO.availabilityText}
						</div>
					)}
				</div>
			</div>

			<p className="text-[14px] leading-relaxed text-black/60 dark:text-white/60 max-w-lg">
				{HERO.bio}
			</p>
		</section>

		{/* Tech Stack Section */}
		<section>
			<h2 className="section-title">Tech Stack</h2>
			<div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-3">
				{TECH_STACK.map((tech, i) => {
					const Icon = TECH_ICONS[tech.name];
					return (
						<motion.div
							key={tech.name}
							initial={{ opacity: 0, y: 6 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.04 }}
							title={tech.name}
							className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.05] dark:hover:bg-white/[0.05] hover:border-black/10 dark:hover:border-white/10 transition-colors group cursor-default"
						>
							{Icon ? (
								<Icon className="w-5 h-5 text-black/40 dark:text-white/40 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors" />
							) : (
								<span className="w-5 h-5 flex items-center justify-center text-[9px] font-bold text-black/30 dark:text-white/30">
									{tech.name.slice(0, 2).toUpperCase()}
								</span>
							)}
							<span className="text-[10px] text-black/30 dark:text-white/30 group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors text-center leading-tight">
								{tech.name}
							</span>
						</motion.div>
					);
				})}
			</div>
		</section>

		{/* Experience Section */}
		<section id="experience">
			<h2 className="section-title">Experiences</h2>
			<div className="space-y-3">
				{EXPERIENCES.map((exp) => (
					<motion.div
						key={exp.company}
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="experience-card space-y-3"
					>
						<div className="flex justify-between items-start gap-4">
							<div>
								<h3 className="font-semibold text-[14px]">{exp.role}</h3>
								<p className="text-[12px] text-black/40 dark:text-white/40">
									{exp.company}
								</p>
							</div>
							<span className="text-[10px] font-bold text-black/25 dark:text-white/25 shrink-0">
								{exp.period}
							</span>
						</div>
						<p className="text-[13px] text-black/50 dark:text-white/50 leading-relaxed">
							{exp.description}
						</p>
						<div className="flex flex-wrap gap-1.5">
							{exp.tags.map((tag) => (
								<span key={tag} className="tag">
									{tag}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>

		{/* Projects Section */}
		<section id="projects">
			<h2 className="section-title">My Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
				{PROJECTS.map((project) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="project-card space-y-2"
					>
						<div className="flex items-start justify-between gap-2">
							<h3 className="font-semibold text-[14px]">{project.title}</h3>
							{project.inDevelopment && (
								<span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-widest shrink-0">
									In Dev
								</span>
							)}
						</div>
						<p className="text-[12px] text-black/45 dark:text-white/45 leading-relaxed">
							{project.description}
						</p>
						<div className="flex flex-wrap gap-1.5 pt-0.5">
							{project.tags.map((tag) => (
								<span key={tag} className="tag">
									{tag}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>

			<div className="pt-4">
				<button className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors group">
					More projects
					<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
				</button>
			</div>
		</section>
	</main>
);
