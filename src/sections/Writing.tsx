import { formatDate, POSTS } from "../lib/posts";

const link =
	"text-accent underline decoration-accent/40 underline-offset-[3px] transition-colors hover:decoration-accent";

export const Writing = () => (
	<section id="writing" className="shell pb-14 sm:pb-20">
		<div className="mx-auto max-w-[620px]">
			<h2 className="text-[16px] font-semibold text-ink sm:text-[16.5px]">
				Writing:
			</h2>

			{POSTS.length > 0 ? (
				<div className="mt-5 space-y-4">
					{POSTS.slice(0, 3).map((post) => (
						<p
							key={post.slug}
							className="text-[15.5px] leading-[1.7] text-body"
						>
							<span className="text-[13px] text-soft">
								{formatDate(post.date)}
							</span>
							<span className="text-soft"> — </span>
							<a href={`#/blog/${post.slug}`} className={link}>
								{post.title}
							</a>
						</p>
					))}

					<p className="text-[15.5px] leading-[1.7] text-body">
						<a href="#/blog" className={link}>
							All posts
						</a>
						<span className="text-soft"> — everything I have written.</span>
					</p>
				</div>
			) : (
				<p className="mt-5 text-[15.5px] leading-[1.7] text-body">
					Nothing published yet.
				</p>
			)}
		</div>
	</section>
);
