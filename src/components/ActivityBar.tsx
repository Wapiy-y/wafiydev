import { FolderOpen, GitBranch, Search } from "lucide-react";

type Panel = "explorer" | "search" | "git";

interface ActivityBarProps {
	activePanel: Panel;
	onPanelClick: (panel: Panel) => void;
}

const items: { id: Panel; icon: typeof FolderOpen; label: string }[] = [
	{ id: "explorer", icon: FolderOpen, label: "Explorer" },
	{ id: "search", icon: Search, label: "Search" },
	{ id: "git", icon: GitBranch, label: "Source Control" },
];

export const ActivityBar = ({
	activePanel,
	onPanelClick,
}: ActivityBarProps) => (
	<div
		className="flex flex-col items-center py-1 shrink-0"
		style={{
			width: "48px",
			background: "var(--c-mantle)",
			borderRight: "1px solid var(--c-surface0)",
		}}
	>
		{items.map(({ id, icon: Icon, label }) => (
			<button
				key={id}
				title={label}
				aria-label={label}
				onClick={() => onPanelClick(id)}
				className="relative w-full h-12 flex items-center justify-center transition-colors"
				style={{
					color: activePanel === id ? "var(--c-text)" : "var(--c-overlay)",
				}}
				onMouseEnter={(e) => {
					if (activePanel !== id)
						e.currentTarget.style.color = "var(--c-subtext0)";
				}}
				onMouseLeave={(e) => {
					if (activePanel !== id)
						e.currentTarget.style.color = "var(--c-overlay)";
				}}
			>
				{/* Active indicator */}
				{activePanel === id && (
					<span
						className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r"
						style={{ background: "var(--c-go)" }}
					/>
				)}
				<Icon className="w-5 h-5" />
			</button>
		))}
	</div>
);
