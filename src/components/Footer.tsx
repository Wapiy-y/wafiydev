export const Footer = () => (
	<footer
		className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-3 shrink-0"
		style={{
			height: "22px",
			background: "var(--c-statusbar)",
			color: "rgba(255,255,255,0.9)",
		}}
	>
		{/* Left: Go version + branch info */}
		<div className="flex items-center gap-0 font-mono text-[11px]">
			<span className="flex items-center gap-1.5 px-2 py-0.5 hover:bg-white/10 transition-colors cursor-default">
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					aria-hidden="true"
				>
					<circle cx="6" cy="6" r="6" fill="white" fillOpacity="0.2" />
					<text
						x="6"
						y="8.5"
						textAnchor="middle"
						fontSize="7"
						fontWeight="900"
						fontFamily="monospace"
						fill="white"
					>
						G
					</text>
				</svg>
				Go 1.24
			</span>
			<span className="flex items-center gap-1.5 px-2 py-0.5 hover:bg-white/10 transition-colors cursor-default">
				<svg
					width="12"
					height="12"
					viewBox="0 0 16 16"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z" />
				</svg>
				main
			</span>
		</div>

		{/* Right: copyright + encoding */}
		<div className="flex items-center font-mono text-[11px]">
			<span className="px-2 py-0.5 hover:bg-white/10 transition-colors cursor-default">
				© {new Date().getFullYear()} Wafiy Abdullah
			</span>
			<span className="px-2 py-0.5 hover:bg-white/10 transition-colors cursor-default">
				UTF-8
			</span>
			<span className="px-2 py-0.5 hover:bg-white/10 transition-colors cursor-default">
				LF
			</span>
		</div>
	</footer>
);
