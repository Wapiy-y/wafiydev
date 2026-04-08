import { ArrowRight, ExternalLink } from "lucide-react";
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

const TECH_COLORS: Record<string, string> = {
	TypeScript: "#3178c6",
	Go: "#00add8",
	React: "#61dafb",
	"Tailwind CSS": "#38bdf8",
	"Node.js": "#6cc24a",
	"Express.js": "#a6adc8",
	PostgreSQL: "#336791",
	Redis: "#ff4438",
	Docker: "#2496ed",
	Kubernetes: "#326ce5",
};

// Simulates line numbers in the editor gutter
const LineNumbers = ({ count }: { count: number }) => (
	<div className="editor-gutter">
		{Array.from({ length: count }, (_, i) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: line numbers are static and never reorder
			<span key={i + 1}>{i + 1}</span>
		))}
	</div>
);

export const HomePage = () => (
	<main
		className="flex pt-[73px] min-h-screen"
		style={{ background: "var(--c-bg)" }}
	>
		<LineNumbers count={60} />

		<div className="editor-content space-y-14 pb-8">
			{/* ── File header ── */}
			<div
				className="font-mono text-[12px] space-y-1"
				style={{ color: "var(--c-overlay)" }}
			>
				<p>
					<span style={{ color: "var(--c-keyword)" }}>package</span>{" "}
					<span style={{ color: "var(--c-text)" }}>portfolio</span>
				</p>
				<p style={{ color: "var(--c-comment)" }}>
					{"// wafiy.go — personal portfolio"}
				</p>
			</div>

			{/* ── Hero / About ── */}
			<section className="space-y-5">
				<p className="section-comment">
					{"// ── about ─────────────────────────"}
				</p>

				<div className="flex items-start gap-5">
					<div
						className="w-16 h-16 rounded-lg overflow-hidden shrink-0"
						style={{ outline: "2px solid var(--c-surface0)" }}
					>
						<img
							src={HERO.avatar}
							alt={HERO.name}
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="space-y-2 pt-1">
						<h1
							className="text-xl font-bold tracking-tight"
							style={{
								color: "var(--c-function)",
								fontFamily: "var(--font-mono)",
							}}
						>
							{HERO.tagline}
						</h1>

						{HERO.available && (
							<div
								className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md font-mono text-[11px]"
								style={{
									background: "rgba(0,173,216,0.08)",
									border: "1px solid rgba(0,173,216,0.25)",
									color: "var(--c-go)",
								}}
							>
								<span
									className="w-1.5 h-1.5 rounded-full"
									style={{
										background: "var(--c-type)",
										boxShadow: "0 0 6px var(--c-type)",
									}}
								/>
								{HERO.availabilityText}
							</div>
						)}
					</div>
				</div>

				<p
					className="text-[14px] leading-7 max-w-xl"
					style={{ color: "var(--c-subtext0)" }}
				>
					{HERO.bio}
				</p>
			</section>

			{/* ── Tech Stack ── */}
			<section>
				<p className="section-comment">
					{"// ── tech stack ──────────────────────"}
				</p>

				<div className="flex flex-wrap gap-2">
					{TECH_STACK.map((tech) => {
						const color = TECH_COLORS[tech.name] ?? "var(--c-subtext0)";
						const Icon = TECH_ICONS[tech.name];
						return (
							<motion.span
								key={tech.name}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-[11px] transition-colors cursor-default"
								style={{
									background: "var(--c-mantle)",
									border: "1px solid var(--c-surface0)",
									color: "var(--c-subtext0)",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.borderColor = color;
									e.currentTarget.style.color = color;
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.borderColor = "var(--c-surface0)";
									e.currentTarget.style.color = "var(--c-subtext0)";
								}}
							>
								{Icon && (
									<Icon
										className="w-3 h-3 shrink-0"
										style={{ color: "inherit" }}
									/>
								)}
								{tech.name}
							</motion.span>
						);
					})}
				</div>
			</section>

			{/* ── Experience ── */}
			<section id="experience">
				<p className="section-comment">
					{"// ── experience ──────────────────────"}
				</p>

				<div className="space-y-3">
					{EXPERIENCES.map((exp) => (
						<motion.div
							key={exp.company}
							initial={{ opacity: 0, y: 8 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="ide-card p-4 space-y-3"
						>
							{/* Card header — like a function signature */}
							<div
								className="font-mono text-[12px]"
								style={{ color: "var(--c-overlay)" }}
							>
								<span style={{ color: "var(--c-keyword)" }}>func </span>
								<span style={{ color: "var(--c-function)" }}>
									{exp.role.replace(/\s+/g, "")}
								</span>
								<span style={{ color: "var(--c-text)" }}>{"() {"}</span>
							</div>

							<div
								className="pl-4 border-l-2 space-y-2"
								style={{ borderColor: "var(--c-surface1)" }}
							>
								<div className="flex justify-between items-start gap-4">
									<div className="space-y-0.5">
										<p
											className="font-semibold text-[14px]"
											style={{ color: "var(--c-text)" }}
										>
											{exp.role}
										</p>
										<p
											className="font-mono text-[11px]"
											style={{ color: "var(--c-string)" }}
										>
											"{exp.company}"
										</p>
									</div>
									<span
										className="font-mono text-[10px] shrink-0"
										style={{ color: "var(--c-number)" }}
									>
										{exp.period}
									</span>
								</div>

								<p
									className="text-[13px] leading-relaxed"
									style={{ color: "var(--c-subtext0)" }}
								>
									{exp.description}
								</p>

								<div className="flex flex-wrap gap-1.5 pt-1">
									{exp.tags.map((tag) => (
										<span key={tag} className="code-tag">
											{tag}
										</span>
									))}
								</div>
							</div>

							<div
								className="font-mono text-[12px]"
								style={{ color: "var(--c-text)" }}
							>
								{"}"}
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* ── Projects ── */}
			<section id="projects">
				<p className="section-comment">
					{"// ── projects ────────────────────────"}
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					{PROJECTS.map((project) => {
						const href = project.url ?? project.link;
						return (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 8 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="ide-card p-4 space-y-3"
							>
								<div className="flex items-start justify-between gap-2">
									<div>
										<p
											className="font-mono text-[11px] mb-0.5"
											style={{ color: "var(--c-keyword)" }}
										>
											var
										</p>
										<h3
											className="font-bold text-[14px]"
											style={{ color: "var(--c-function)" }}
										>
											{project.title}
										</h3>
									</div>
									{project.inDevelopment && (
										<span
											className="font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest shrink-0"
											style={{
												background: "rgba(250,179,135,0.1)",
												color: "#fab387",
												border: "1px solid rgba(250,179,135,0.25)",
											}}
										>
											WIP
										</span>
									)}
								</div>

								<p
									className="text-[13px] leading-relaxed"
									style={{ color: "var(--c-subtext0)" }}
								>
									{project.description}
								</p>

								<div className="flex items-center justify-between gap-2 pt-0.5">
									<div className="flex flex-wrap gap-1.5">
										{project.tags.map((tag) => (
											<span key={tag} className="code-tag">
												{tag}
											</span>
										))}
									</div>
									{href && (
										<a
											href={href}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded transition-colors shrink-0"
											style={{
												color: "var(--c-go)",
												border: "1px solid rgba(0,173,216,0.25)",
												background: "rgba(0,173,216,0.06)",
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.background =
													"rgba(0,173,216,0.14)";
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.background =
													"rgba(0,173,216,0.06)";
											}}
										>
											<ExternalLink className="w-3 h-3" />
											visit
										</a>
									)}
								</div>
							</motion.div>
						);
					})}
				</div>

				<div className="pt-4">
					<button
						className="inline-flex items-center gap-1.5 font-mono text-[12px] transition-colors group"
						style={{ color: "var(--c-overlay)" }}
						onMouseEnter={(e) => {
							e.currentTarget.style.color = "var(--c-go)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.color = "var(--c-overlay)";
						}}
					>
						{"// more projects"}
						<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
					</button>
				</div>
			</section>

			{/* ── EOF marker ── */}
			<div
				className="font-mono text-[12px] pb-4"
				style={{ color: "var(--c-surface1)" }}
			>
				{"// EOF"}
			</div>
		</div>
	</main>
);
