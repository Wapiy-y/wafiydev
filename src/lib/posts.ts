export interface Post {
	slug: string;
	title: string;
	date: string;
	summary: string;
	body: string;
}

const files = import.meta.glob("../../content/posts/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

const field = (block: string, key: string) => {
	const match = new RegExp(`^${key}:\\s*(.+)$`, "m").exec(block);
	return match ? match[1].trim().replace(/^["']|["']$/g, "") : "";
};

const toPost = ([path, raw]: [string, string]): Post => {
	const slug = path.split("/").pop()?.replace(/\.md$/, "") ?? "post";
	const match = FRONT_MATTER.exec(raw);
	const block = match?.[1] ?? "";
	const body = match ? raw.slice(match[0].length) : raw;

	return {
		slug,
		title: field(block, "title") || slug.replace(/-/g, " "),
		date: field(block, "date"),
		summary: field(block, "summary"),
		body: body.trim(),
	};
};

export const POSTS: Post[] = Object.entries(files)
	.map(toPost)
	.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export const getPost = (slug: string) =>
	POSTS.find((post) => post.slug === slug);

export const formatDate = (iso: string) => {
	if (!iso) return "";

	const date = new Date(`${iso}T00:00:00Z`);
	if (Number.isNaN(date.getTime())) return iso;

	return new Intl.DateTimeFormat("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: "UTC",
	}).format(date);
};
