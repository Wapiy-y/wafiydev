export const Footer = () => (
	<footer className="border-t border-line">
		<div className="shell flex flex-col items-center justify-center gap-2 py-6 text-[12.5px] text-soft sm:flex-row sm:gap-3">
			<p>© {new Date().getFullYear()} Wafiy</p>
			<p aria-hidden="true" className="hidden sm:block">
				·
			</p>
			<p>Built with React, TypeScript &amp; Tailwind CSS</p>
		</div>
	</footer>
);
