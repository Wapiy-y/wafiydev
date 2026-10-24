const NAV = [
	{ href: "#projects", label: "projects" },
	{ href: "#skills", label: "skills" },
	{ href: "#connect", label: "connect" },
];

export const Header = () => (
	<header className="mx-auto flex w-full max-w-[668px] items-baseline justify-between gap-4 px-6 pt-7 pb-6 sm:pt-9">
		<a
			href="#top"
			className="text-[15px] font-medium tracking-[-0.01em] text-ink"
		>
			wafiy
		</a>

		<nav className="flex items-baseline gap-2 text-[13.5px] text-soft">
			{NAV.map((item, index) => (
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
	</header>
);
