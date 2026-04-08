import { Link, useLocation } from "react-router-dom";

const GoFileIcon = () => (
	<svg
		width="12"
		height="12"
		viewBox="0 0 12 12"
		fill="none"
		aria-hidden="true"
	>
		<circle cx="6" cy="6" r="6" fill="#00add8" />
		<text
			x="6"
			y="8.5"
			textAnchor="middle"
			fontSize="7"
			fontWeight="900"
			fontFamily="monospace"
			fill="#11111b"
		>
			G
		</text>
	</svg>
);

const tabs = [
	{ to: "/", label: "home.go" },
	{ to: "/blog", label: "blog.go" },
];

export const TabBar = () => {
	const { pathname } = useLocation();

	return (
		<div
			className="fixed z-40 right-0 flex items-end"
			style={{
				top: "36px",
				// On mobile: full width. On desktop: offset past the sidebar (268px).
				// Handled via inline + Tailwind below via a wrapper trick.
				left: 0,
				background: "var(--c-mantle)",
				borderBottom: "1px solid var(--c-surface0)",
			}}
		>
			{/* Spacer that matches sidebar width on desktop */}
			<div className="hidden lg:block shrink-0" style={{ width: "268px" }} />

			{tabs.map(({ to, label }) => {
				const active = pathname === to;
				return (
					<Link
						key={to}
						to={to}
						className="flex items-center gap-2 px-5 py-2 font-mono text-[12px] border-t-2 transition-colors shrink-0"
						style={
							active
								? {
										background: "var(--c-bg)",
										borderTopColor: "var(--c-go)",
										color: "var(--c-text)",
									}
								: {
										background: "transparent",
										borderTopColor: "transparent",
										color: "var(--c-overlay)",
									}
						}
						onMouseEnter={(e) => {
							if (!active) e.currentTarget.style.color = "var(--c-subtext0)";
						}}
						onMouseLeave={(e) => {
							if (!active) e.currentTarget.style.color = "var(--c-overlay)";
						}}
					>
						<GoFileIcon />
						{label}
						{active && (
							<span
								className="w-1.5 h-1.5 rounded-full ml-0.5"
								style={{ background: "var(--c-subtext0)", opacity: 0.5 }}
							/>
						)}
					</Link>
				);
			})}
		</div>
	);
};
