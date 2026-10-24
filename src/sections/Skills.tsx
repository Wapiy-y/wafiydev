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
				<div className="space-y-7">
					{groups.map(([category, items]) => (
						<div key={category}>
							<p className="text-[11.5px] tracking-[0.08em] text-soft uppercase">
								{category}
							</p>
							<div className="mt-2.5 flex flex-wrap justify-center gap-1.5">
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
