import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { TECH_STACK } from "../data";
import type { TechStack } from "../types";

const CATEGORY_ORDER = ["Language", "Backend", "Frontend", "Cloud"];

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

export const Skills = () => {
	const groups = groupByCategory(TECH_STACK);

	return (
		<Section id="skills" title="Skills">
			<Reveal>
				<div className="space-y-4">
					{groups.map(([category, items]) => (
						<div
							key={category}
							className="grid gap-2 sm:grid-cols-[110px_minmax(0,1fr)] sm:items-baseline sm:gap-6"
						>
							<p className="text-[12px] tracking-[0.06em] text-soft uppercase">
								{category}
							</p>
							<div className="flex flex-wrap gap-1.5">
								{items.map((tech) => (
									<span key={tech.name} className="chip">
										{tech.name}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</Reveal>
		</Section>
	);
};
