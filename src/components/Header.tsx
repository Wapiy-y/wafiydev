const HOME_NAV = [
	{ href: "#projects", label: "projects" },
	{ href: "#skills", label: "skills" },
	{ href: "#/blog", label: "writing" },
	{ href: "#connect", label: "connect" },
];

interface HeaderProps {
	page: "home" | "blog";
}

export const Header = ({ page }: HeaderProps) => (
	<header className="mx-auto flex w-full max-w-[668px] items-baseline justify-between gap-4 px-6 pt-7 pb-6 sm:pt-9">
		<a
			href="#/"
			className="text-[15px] font-medium tracking-[-0.01em] text-ink"
		>
			wafiy
		</a>

		{page === "home" ? (
			<nav className="flex items-baseline gap-2 text-[13.5px] text-soft">
				{HOME_NAV.map((item, index) => (
					<span key={item.href} className="flex items-baseline gap-2">
						{index > 0 && <span aria-hidden="true">/</span>}
						<a
							href={item.href}
							className="transition-colors hover:text-ink hover:underline hover:underline-offset-4"
						>
							{item.label}
						</a>
					</span>
				))}
			</nav>
		) : (
			<a
				href="#/"
				className="text-[13.5px] text-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
			>
				← home
			</a>
		)}
	</header>
);
