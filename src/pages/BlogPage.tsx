import { FileText } from "lucide-react";
import { motion } from "motion/react";
import { BLOGS } from "../data";

export const BlogPage = () => (
	<main className="section-padding pt-32 space-y-12 min-h-[80vh]">
		<section id="blogs" className="space-y-6">
			<h2 className="section-title">Blogs</h2>
			{BLOGS.length > 0 ? (
				<div className="space-y-4">
					{BLOGS.map((blog) => (
						<motion.a
							key={blog.link}
							href={blog.link}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="experience-card block group"
						>
							<div className="flex justify-between items-start mb-2">
								<h3 className="font-bold text-[15px] group-hover:text-black dark:group-hover:text-white transition-colors">
									{blog.title}
								</h3>
								<span className="text-[11px] font-bold text-black/30 dark:text-white/30 uppercase">
									{blog.date}
								</span>
							</div>
							<p className="text-[14px] text-black/50 dark:text-white/50 leading-relaxed">
								{blog.excerpt}
							</p>
						</motion.a>
					))}
				</div>
			) : (
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					className="experience-card flex flex-col items-center justify-center py-16 text-center space-y-4 border-dashed"
				>
					<div className="p-4 rounded-full bg-black/[0.02] dark:bg-white/[0.02] text-black/20 dark:text-white/20">
						<FileText className="w-8 h-8" />
					</div>
					<div className="space-y-1">
						<p className="text-[15px] font-bold text-black/40 dark:text-white/40">
							No blogs yet
						</p>
						<p className="text-[13px] text-black/20 dark:text-white/20">
							I'm currently working on some interesting articles. Stay tuned!
						</p>
					</div>
				</motion.div>
			)}
		</section>
	</main>
);
