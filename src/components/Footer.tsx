export const Footer = () => (
	<footer className="shell pb-10">
		<div className="mx-auto flex max-w-[620px] items-center justify-center gap-2.5 border-t border-line pt-6 text-[12.5px] text-soft">
			<p>© {new Date().getFullYear()} Wafiy</p>
			<span aria-hidden="true">/</span>
			<p>Built with React &amp; Tailwind CSS</p>
		</div>
	</footer>
);
