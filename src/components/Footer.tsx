import { ArrowUp } from "lucide-react";

export const Footer = () => (
	<footer className="relative z-10 border-t border-line">
		<div className="shell flex flex-col items-center justify-between gap-y-3 py-8 font-mono text-[11.5px] text-faint sm:flex-row">
			<p>© {new Date().getFullYear()} wafiydev</p>
			<p className="order-3 sm:order-2">
				Built with React, TypeScript &amp; Tailwind CSS
			</p>
			<a
				href="#top"
				className="order-2 inline-flex items-center gap-1.5 transition-colors hover:text-fg sm:order-3"
			>
				Back to top
				<ArrowUp className="h-3.5 w-3.5" />
			</a>
		</div>
	</footer>
);
