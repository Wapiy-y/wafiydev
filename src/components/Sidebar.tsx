import {
	ChevronDown,
	ChevronRight,
	FileCode,
	FileText,
	Folder,
	FolderOpen,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const GoFileIcon = () => (
	<svg
		width="11"
		height="11"
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

interface TreeItemProps {
	children: React.ReactNode;
	active?: boolean;
	depth?: number;
	as?: "button" | "link" | "div";
	to?: string;
	onClick?: () => void;
}

const TreeItem = ({
	children,
	active = false,
	depth = 0,
	as: As = "div",
	to,
	onClick,
}: TreeItemProps) => {
	const style: React.CSSProperties = {
		paddingLeft: `${8 + depth * 12}px`,
		color: active ? "var(--c-text)" : "var(--c-subtext0)",
		background: active ? "rgba(255,255,255,0.07)" : "transparent",
	};

	const baseClass =
		"w-full flex items-center gap-1.5 py-0.5 pr-2 text-left transition-colors select-none cursor-default font-mono text-[12px]";

	if (As === "link" && to) {
		return (
			<Link to={to} className={baseClass} style={style}>
				{children}
			</Link>
		);
	}
	if (As === "button") {
		return (
			<button
				type="button"
				className={`${baseClass} hover:bg-white/5`}
				style={style}
				onClick={onClick}
			>
				{children}
			</button>
		);
	}
	return (
		<div className={baseClass} style={style}>
			{children}
		</div>
	);
};

export const Sidebar = () => {
	const { pathname } = useLocation();
	const [portfolioOpen, setPortfolioOpen] = useState(true);
	const [srcOpen, setSrcOpen] = useState(true);

	return (
		<div
			className="flex flex-col overflow-hidden shrink-0"
			style={{
				width: "220px",
				background: "var(--c-mantle)",
				borderRight: "1px solid var(--c-surface0)",
			}}
		>
			{/* Panel header */}
			<div
				className="flex items-center justify-between px-4 py-2 shrink-0"
				style={{ borderBottom: "1px solid var(--c-surface0)" }}
			>
				<span
					className="font-mono text-[10px] font-bold tracking-widest uppercase"
					style={{ color: "var(--c-overlay)" }}
				>
					Explorer
				</span>
			</div>

			{/* File tree */}
			<div className="flex-1 overflow-y-auto py-1">
				{/* Root: portfolio */}
				<TreeItem
					as="button"
					depth={0}
					onClick={() => setPortfolioOpen((o) => !o)}
				>
					{portfolioOpen ? (
						<ChevronDown
							className="w-3 h-3 shrink-0"
							style={{ color: "var(--c-overlay)" }}
						/>
					) : (
						<ChevronRight
							className="w-3 h-3 shrink-0"
							style={{ color: "var(--c-overlay)" }}
						/>
					)}
					{portfolioOpen ? (
						<FolderOpen
							className="w-3.5 h-3.5 shrink-0"
							style={{ color: "#e8d44d" }}
						/>
					) : (
						<Folder
							className="w-3.5 h-3.5 shrink-0"
							style={{ color: "#e8d44d" }}
						/>
					)}
					<span>portfolio</span>
				</TreeItem>

				{portfolioOpen && (
					<>
						{/* src/ folder */}
						<TreeItem
							as="button"
							depth={1}
							onClick={() => setSrcOpen((o) => !o)}
						>
							{srcOpen ? (
								<ChevronDown
									className="w-3 h-3 shrink-0"
									style={{ color: "var(--c-overlay)" }}
								/>
							) : (
								<ChevronRight
									className="w-3 h-3 shrink-0"
									style={{ color: "var(--c-overlay)" }}
								/>
							)}
							{srcOpen ? (
								<FolderOpen
									className="w-3.5 h-3.5 shrink-0"
									style={{ color: "#dcb67a" }}
								/>
							) : (
								<Folder
									className="w-3.5 h-3.5 shrink-0"
									style={{ color: "#dcb67a" }}
								/>
							)}
							<span>src</span>
						</TreeItem>

						{srcOpen && (
							<>
								<TreeItem as="link" to="/" depth={2} active={pathname === "/"}>
									<span className="shrink-0 flex items-center">
										<GoFileIcon />
									</span>
									<span className="truncate">home.go</span>
								</TreeItem>

								<TreeItem
									as="link"
									to="/blog"
									depth={2}
									active={pathname === "/blog"}
								>
									<span className="shrink-0 flex items-center">
										<GoFileIcon />
									</span>
									<span className="truncate">blog.go</span>
								</TreeItem>
							</>
						)}

						{/* go.mod */}
						<TreeItem depth={1}>
							<span className="w-3 h-3 shrink-0" />
							<FileCode
								className="w-3.5 h-3.5 shrink-0"
								style={{ color: "#00add8" }}
							/>
							<span className="truncate" style={{ color: "var(--c-overlay)" }}>
								go.mod
							</span>
						</TreeItem>

						{/* README.md */}
						<TreeItem depth={1}>
							<span className="w-3 h-3 shrink-0" />
							<FileText
								className="w-3.5 h-3.5 shrink-0"
								style={{ color: "#89b4fa" }}
							/>
							<span className="truncate" style={{ color: "var(--c-overlay)" }}>
								README.md
							</span>
						</TreeItem>
					</>
				)}
			</div>
		</div>
	);
};
