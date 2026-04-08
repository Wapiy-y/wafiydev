import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { HERO } from "../data";

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
			fill="#080808"
		>
			G
		</text>
	</svg>
);

const tabs = [
	{ to: "/", label: "home.go" },
	{ to: "/blog", label: "blog.go" },
];

export const Navbar = () => {
	const { pathname } = useLocation();

	return (
		<nav
			className="fixed top-0 left-0 right-0 z-50 flex flex-col"
			style={{ background: "var(--c-crust)" }}
		>
			{/* ── Titlebar ── */}
			<div
				className="flex items-center justify-between px-4 shrink-0"
				style={{ height: "36px", borderBottom: "1px solid var(--c-surface0)" }}
			>
				<div className="flex items-center gap-1.5">
					<span
						className="w-3 h-3 rounded-full"
						style={{ background: "#ff5f57" }}
					/>
					<span
						className="w-3 h-3 rounded-full"
						style={{ background: "#febc2e" }}
					/>
					<span
						className="w-3 h-3 rounded-full"
						style={{ background: "#28c840" }}
					/>
				</div>

				<span
					className="font-mono text-[11px] absolute left-1/2 -translate-x-1/2 pointer-events-none"
					style={{ color: "var(--c-overlay)" }}
				>
					wafiy — portfolio
				</span>

				<div
					className="flex items-center gap-3"
					style={{ color: "var(--c-overlay)" }}
				>
					<a
						href={HERO.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						style={{ color: "inherit" }}
						onMouseEnter={(e) => {
							e.currentTarget.style.color = "var(--c-text)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.color = "var(--c-overlay)";
						}}
					>
						<FaGithub className="w-4 h-4" />
					</a>
					<a
						href={HERO.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						style={{ color: "inherit" }}
						onMouseEnter={(e) => {
							e.currentTarget.style.color = "var(--c-text)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.color = "var(--c-overlay)";
						}}
					>
						<FaLinkedin className="w-4 h-4" />
					</a>
				</div>
			</div>

			{/* ── Tab bar ── */}
			<div
				className="flex items-end"
				style={{
					background: "var(--c-mantle)",
					borderBottom: "1px solid var(--c-surface0)",
				}}
			>
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
		</nav>
	);
};
