import type { ComponentType, CSSProperties } from "react";
import {
	SiDocker,
	SiExpress,
	SiGo,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedis,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { TECH_STACK } from "../data";
import type { TechStack } from "../types";

type IconComponent = ComponentType<{
	className?: string;
	style?: CSSProperties;
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
};

const CATEGORY_ORDER = [
	"Language",
	"Frontend",
	"Backend",
	"Database",
	"DevOps",
];

const groupByCategory = (stack: TechStack[]) => {
	const groups = new Map<string, TechStack[]>();

	for (const tech of stack) {
		const group = groups.get(tech.category) ?? [];
		group.push(tech);
		groups.set(tech.category, group);
	}

	return [...groups.entries()].sort(
		([a], [b]) =>
			(CATEGORY_ORDER.indexOf(a) + 1 || 99) -
			(CATEGORY_ORDER.indexOf(b) + 1 || 99),
	);
};

export const Stack = () => {
	const groups = groupByCategory(TECH_STACK);

	return (
		<Section id="stack" index="01" kicker="toolkit" title="Tech stack">
			<Reveal>
				<div className="card divide-y divide-line overflow-hidden">
					{groups.map(([category, items]) => (
						<div
							key={category}
							className="grid gap-2.5 px-4 py-4 sm:grid-cols-[132px_minmax(0,1fr)] sm:items-center sm:gap-5 sm:px-5"
						>
							<p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">
								{category}
							</p>
							<div className="flex flex-wrap gap-2">
								{items.map((tech) => {
									const Icon = TECH_ICONS[tech.name];
									const color = TECH_COLORS[tech.name] ?? "var(--accent)";

									return (
										<span
											key={tech.name}
											className="chip tech-chip"
											style={{ "--brand": color } as CSSProperties}
										>
											{Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
											{tech.name}
										</span>
									);
								})}
							</div>
						</div>
					))}
				</div>
			</Reveal>
		</Section>
	);
};
