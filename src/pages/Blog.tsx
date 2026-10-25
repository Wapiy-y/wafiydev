import { formatDate, POSTS } from "../lib/posts";

const link =
	"font-medium text-accent underline decoration-accent/40 underline-offset-[3px] transition-colors hover:decoration-accent";

export const Blog = () => (
	<main id="main" className="shell pb-20 sm:pb-28">
		<div className="mx-auto max-w-[620px]">
			<h1 className="text-[22px] font-semibold tracking-[-0.02em] text-ink sm:text-[24px]">
				Writing
			</h1>

			{POSTS.length > 0 ? (
				<ul className="mt-8 space-y-6">
					{POSTS.map((post) => (
						<li key={post.slug}>
							<a href={`#/blog/${post.slug}`} className="group block">
								<p className="text-[15.5px] leading-[1.7] text-body">
									<span className="text-[13px] text-soft">
										{formatDate(post.date)}
									</span>
									<span className="text-soft"> — </span>
									<span className={link}>{post.title}</span>
								</p>
								{post.summary && (
									<p className="mt-1 text-[13px] leading-[1.7] text-soft">
										{post.summary}
									</p>
								)}
							</a>
						</li>
					))}
				</ul>
			) : (
				<p className="mt-8 text-[15.5px] text-body">
					Nothing published yet. Come back soon.
				</p>
			)}
		</div>
	</main>
);
