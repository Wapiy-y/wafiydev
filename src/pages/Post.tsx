// biome-ignore-all lint/security/noDangerouslySetInnerHtml: post bodies are markdown files authored by the site owner
import { marked } from "marked";
import { formatDate, type Post as PostType } from "../lib/posts";

interface PostProps {
	post: PostType;
}

export const Post = ({ post }: PostProps) => (
	<main id="main" className="shell pb-20 sm:pb-28">
		<article className="mx-auto max-w-[620px]">
			<a
				href="#/blog"
				className="text-[13px] text-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
			>
				← writing
			</a>

			<h1 className="mt-6 text-[24px] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[28px]">
				{post.title}
			</h1>

			<p className="mt-3 text-[13px] text-soft">{formatDate(post.date)}</p>

			<div
				className="post-body mt-8"
				dangerouslySetInnerHTML={{
					__html: marked.parse(post.body, { async: false }),
				}}
			/>
		</article>
	</main>
);
