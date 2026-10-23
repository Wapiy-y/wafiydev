import type { Education, Experience, Hero, Project, TechStack } from "../types";
import rawData from "./data.json";

const data = rawData satisfies {
	hero: Hero;
	techStack: TechStack[];
	experiences: Experience[];
	education: Education[];
	certifications: string[];
	projects: Project[];
};

export const HERO: Hero = data.hero;
export const TECH_STACK: TechStack[] = data.techStack;
export const EXPERIENCES: Experience[] = data.experiences;
export const EDUCATION: Education[] = data.education;
export const CERTIFICATIONS: string[] = data.certifications;
export const PROJECTS: Project[] = data.projects;
