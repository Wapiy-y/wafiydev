import { ArrowUpRight, ChevronRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useTheme } from "../hooks/useTheme";

const NAV_ITEMS = [
	{ id: "about", label: "About" },
	{ id: "stack", label: "Stack" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "writing", label: "Writing" },
] as const;

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { theme, toggle } = useTheme();
	const active = useScrollSpy(NAV_IDS);
	const progress = useScrollProgress();

	useEffect(() => {
		if (!menuOpen) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setMenuOpen(false);
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [menuOpen]);

	return (
		<header className="header-blur sticky top-0 z-50 border-b border-line">
			<div className="shell flex h-16 items-center justify-between gap-3">
				<a
					href="#top"
					className="group flex h-11 shrink-0 items-center gap-2.5"
					aria-label="wafiydev — back to top"
				>
					<span className="grid h-8 w-8 place-items-center rounded-lg border border-line-strong bg-card font-mono text-[12px] text-accent transition-colors group-hover:border-accent-line">
						{"</>"}
					</span>
					<span className="font-mono text-[13px] font-medium tracking-tight text-fg">
						wafiydev
					</span>
					<span
						aria-hidden="true"
						className="hidden h-1.5 w-1.5 rounded-full bg-accent sm:block"
					/>
				</a>

				<nav
					className="hidden items-center gap-0.5 md:flex"
					aria-label="Sections"
				>
					{NAV_ITEMS.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							className="nav-link"
							data-active={active === item.id}
							aria-current={active === item.id ? "true" : undefined}
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="flex shrink-0 items-center gap-2">
					<button
						type="button"
						onClick={toggle}
						className="icon-btn h-11 w-11 sm:h-10 sm:w-10"
						aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
					>
						{theme === "dark" ? (
							<Sun className="h-4 w-4" />
						) : (
							<Moon className="h-4 w-4" />
						)}
					</button>

					<a
						href="#contact"
						className="btn btn-primary hidden h-10 px-4 text-[13px] lg:inline-flex"
					>
						Let&apos;s talk
						<ArrowUpRight className="h-3.5 w-3.5" />
					</a>

					<button
						type="button"
						onClick={() => setMenuOpen((open) => !open)}
						className="icon-btn h-11 w-11 sm:h-10 sm:w-10 md:hidden"
						aria-expanded={menuOpen}
						aria-controls="mobile-nav"
						aria-label={menuOpen ? "Close menu" : "Open menu"}
					>
						{menuOpen ? (
							<X className="h-4 w-4" />
						) : (
							<Menu className="h-4 w-4" />
						)}
					</button>
				</div>
			</div>

			{menuOpen && (
				<div id="mobile-nav" className="border-t border-line bg-bg md:hidden">
					<nav className="shell flex flex-col gap-1 py-3" aria-label="Sections">
						{NAV_ITEMS.map((item) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								onClick={() => setMenuOpen(false)}
								className="flex items-center justify-between rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-card hover:text-fg"
							>
								{item.label}
								<ChevronRight className="h-4 w-4 text-faint" />
							</a>
						))}
						<div aria-hidden="true" className="my-2 h-px bg-line" />
						<div className="px-3">
							{/* biome-ignore lint/a11y/useValidAnchor: in-page hash link that also closes the menu */}
							<a
								href="#contact"
								onClick={() => setMenuOpen(false)}
								className="btn btn-primary w-full"
							>
								Let&apos;s talk
								<ArrowUpRight className="h-3.5 w-3.5" />
							</a>
						</div>
					</nav>
				</div>
			)}

			<div
				aria-hidden="true"
				className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent/70"
				style={{ transform: `scaleX(${progress})` }}
			/>
		</header>
	);
};
