import { TECH_STACK } from "../data";
import type { TechStack } from "../types";

const CATEGORY_ORDER = ["Language", "Backend", "Frontend", "Cloud"];

const CATEGORY_LABEL: Record<string, string> = {
	Language: "Languages",
	Backend: "Backend",
	Frontend: "Frontend",
	Cloud: "Cloud",
};

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
		<section id="skills" className="shell pb-14 sm:pb-20">
			<div className="mx-auto max-w-[620px]">
				<h2 className="text-[16px] font-semibold text-ink sm:text-[16.5px]">
					Tools I reach for:
				</h2>

				<div className="mt-5 space-y-3 text-[15.5px] leading-[1.7]">
					{groups.map(([category, items]) => (
						<p key={category}>
							<span className="text-soft">
								{CATEGORY_LABEL[category] ?? category} —{" "}
							</span>
							<span className="text-body">
								{items.map((tech) => tech.name).join(", ")}.
							</span>
						</p>
					))}
				</div>
			</div>
		</section>
	);
};
