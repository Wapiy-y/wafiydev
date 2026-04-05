export interface Hero {
	name: string;
	avatar: string;
	tagline: string;
	available: boolean;
	availabilityText: string;
	bio: string;
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
	link?: string;
	image?: string;
	inDevelopment?: boolean;
}

export interface Experience {
	company: string;
	role: string;
	period: string;
	description: string;
	tags: string[];
}

export interface Blog {
	title: string;
	date: string;
	excerpt: string;
	link: string;
}
