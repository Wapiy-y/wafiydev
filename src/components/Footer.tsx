export const Footer = () => (
	<footer className="border-t border-line">
		<div className="shell flex flex-col items-start justify-between gap-2 py-6 text-[12.5px] text-soft sm:flex-row sm:items-center">
			<p>© {new Date().getFullYear()} Wafiy</p>
			<p>Built with React, TypeScript &amp; Tailwind CSS</p>
		</div>
	</footer>
);
