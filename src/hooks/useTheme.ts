import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(
		() => (localStorage.getItem("theme") as Theme | null) ?? "light",
	);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.remove("dark", "light");
		root.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

	return { theme, toggle };
};
