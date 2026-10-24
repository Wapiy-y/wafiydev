export interface Hero {
	name: string;
	avatar: string;
	greeting: string;
	intro: string[];
	location: string;
	available: boolean;
	availabilityText: string;
	email: string;
	github: string;
	linkedin: string;
}

export interface TechStack {
	name: string;
	category: string;
}

export interface Project {
	title: string;
	description: string;
	tags: string[];
	url?: string;
	link?: string;
	image?: string;
	inDevelopment?: boolean;
}
