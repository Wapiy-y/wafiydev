import type { Blog, Experience, Hero, Project, TechStack } from "../types";
import rawData from "./data.json";

const data = rawData satisfies {
	hero: Hero;
	techStack: TechStack[];
	projects: Project[];
	experiences: Experience[];
	blogs: Blog[];
};

export const HERO: Hero = data.hero;
export const TECH_STACK: TechStack[] = data.techStack;
export const PROJECTS: Project[] = data.projects;
export const EXPERIENCES: Experience[] = data.experiences;
export const BLOGS: Blog[] = data.blogs;
