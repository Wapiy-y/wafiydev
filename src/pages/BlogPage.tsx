import { FileText } from "lucide-react";
import { motion } from "motion/react";
import { BLOGS } from "../data";

export const BlogPage = () => (
	<main
		className="flex pt-[73px] min-h-screen"
		style={{ background: "var(--c-bg)" }}
	>
		{/* Line number gutter */}
		<div className="editor-gutter">
			{Array.from({ length: 60 }, (_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: line numbers are static and never reorder
				<span key={i + 1}>{i + 1}</span>
			))}
		</div>

		<div className="editor-content space-y-10 pb-8">
			{/* File header */}
			<div
				className="font-mono text-[12px] space-y-1"
				style={{ color: "var(--c-overlay)" }}
			>
				<p>
					<span style={{ color: "var(--c-keyword)" }}>package</span>{" "}
					<span style={{ color: "var(--c-text)" }}>portfolio</span>
				</p>
				<p style={{ color: "var(--c-comment)" }}>
					{"// blog.go — articles & writing"}
				</p>
			</div>

			{/* Blog section */}
			<section id="blogs" className="space-y-4">
				<p className="section-comment">
					{"// ── blogs ───────────────────────────"}
				</p>

				{BLOGS.length > 0 ? (
					<div className="space-y-3">
						{BLOGS.map((blog) => (
							<motion.a
								key={blog.link}
								href={blog.link}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="ide-card block p-4 space-y-2 group no-underline"
							>
								<div className="flex justify-between items-start gap-4">
									<h3
										className="font-bold text-[14px] transition-colors"
										style={{ color: "var(--c-function)" }}
									>
										{blog.title}
									</h3>
									<span
										className="font-mono text-[10px] shrink-0"
										style={{ color: "var(--c-number)" }}
									>
										{blog.date}
									</span>
								</div>
								<p
									className="text-[13px] leading-relaxed"
									style={{ color: "var(--c-subtext0)" }}
								>
									{blog.excerpt}
								</p>
							</motion.a>
						))}
					</div>
				) : (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="ide-card flex flex-col items-center justify-center py-16 text-center space-y-4"
						style={{ borderStyle: "dashed" }}
					>
						<div
							className="p-4 rounded-full"
							style={{
								background: "var(--c-surface0)",
								color: "var(--c-overlay)",
							}}
						>
							<FileText className="w-7 h-7" />
						</div>
						<div className="space-y-2">
							<p
								className="font-mono text-[13px] font-bold"
								style={{ color: "var(--c-subtext0)" }}
							>
								<span style={{ color: "var(--c-comment)" }}>{"// "}</span>
								no blogs yet
							</p>
							<p
								className="font-mono text-[11px]"
								style={{ color: "var(--c-overlay)" }}
							>
								{"/* working on some interesting articles — stay tuned */"}
							</p>
						</div>
					</motion.div>
				)}
			</section>

			{/* EOF */}
			<div
				className="font-mono text-[12px] pb-4"
				style={{ color: "var(--c-surface1)" }}
			>
				{"// EOF"}
			</div>
		</div>
	</main>
);
