export interface Hero {
	name: string;
	avatar: string;
	tagline: string;
	role: string;
	location: string;
	years: string;
	available: boolean;
	availabilityText: string;
	bio: string;
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
