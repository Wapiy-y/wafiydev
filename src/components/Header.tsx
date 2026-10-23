import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const NAV_ITEMS = [
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "skills", label: "Skills" },
	{ id: "education", label: "Education" },
	{ id: "contact", label: "Contact" },
] as const;

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const active = useScrollSpy(NAV_IDS);

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
			<div className="shell flex h-20 items-center justify-between gap-4">
				<a
					href="#top"
					className="inline-flex h-11 items-center text-[21px] font-extrabold tracking-[-0.03em]"
				>
					wafiy<span className="text-accent">.</span>
				</a>

				<nav
					className="hidden items-center gap-6 md:flex"
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

				<button
					type="button"
					onClick={() => setMenuOpen((open) => !open)}
					className="-mr-2 grid h-11 w-11 place-items-center rounded-lg text-ink md:hidden"
					aria-expanded={menuOpen}
					aria-controls="mobile-nav"
					aria-label={menuOpen ? "Close menu" : "Open menu"}
				>
					{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</div>

			{menuOpen && (
				<div id="mobile-nav" className="border-t border-line md:hidden">
					<nav className="shell flex flex-col py-2" aria-label="Sections">
						{NAV_ITEMS.map((item) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								onClick={() => setMenuOpen(false)}
								className="border-b border-line py-3.5 text-[15px] text-body last:border-0 hover:text-ink"
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			)}
		</header>
	);
};
