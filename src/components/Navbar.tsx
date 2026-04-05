import { Moon, Sun } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HERO } from "../data";
import { useTheme } from "../hooks/useTheme";

export const Navbar = () => {
	const { theme, toggle } = useTheme();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-64 xl:px-[25%] py-6 flex items-center justify-between bg-[#f5f5f5]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm">
			<Link
				to="/"
				className="font-bold text-base tracking-tight text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white transition-colors"
			>
				wafiy
			</Link>

			<div className="flex items-center gap-5 text-[13px] font-medium text-black/40 dark:text-white/40">
				<Link
					to="/blog"
					className="hover:text-black dark:hover:text-white transition-colors"
				>
					blog
				</Link>

				<div className="flex items-center gap-3 border-l border-black/10 dark:border-white/10 pl-5">
					<a
						href={HERO.github}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-black dark:hover:text-white transition-colors"
						aria-label="GitHub"
					>
						<FaGithub className="w-4 h-4" />
					</a>
					<a
						href={HERO.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-black dark:hover:text-white transition-colors"
						aria-label="LinkedIn"
					>
						<FaLinkedin className="w-4 h-4" />
					</a>
					<button
						onClick={toggle}
						className="hover:text-black dark:hover:text-white transition-colors"
						aria-label="Toggle theme"
					>
						{theme === "dark" ? (
							<Sun className="w-4 h-4" />
						) : (
							<Moon className="w-4 h-4" />
						)}
					</button>
				</div>
			</div>
		</nav>
	);
};
