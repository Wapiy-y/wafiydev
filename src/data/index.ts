import type { Hero, Project, TechStack } from "../types";
import rawData from "./data.json";

const data = rawData satisfies {
	hero: Hero;
	techStack: TechStack[];
	projects: Project[];
};

export const HERO: Hero = data.hero;
export const TECH_STACK: TechStack[] = data.techStack;
export const PROJECTS: Project[] = data.projects;
