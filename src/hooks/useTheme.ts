import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

const readTheme = (): Theme =>
	document.documentElement.classList.contains("light") ? "light" : "dark";

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(readTheme);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", theme === "dark");
		root.classList.toggle("light", theme === "light");
		localStorage.setItem(STORAGE_KEY, theme);
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute("content", theme === "dark" ? "#08090a" : "#f7f8f9");
	}, [theme]);

	const toggle = useCallback(
		() => setTheme((current) => (current === "dark" ? "light" : "dark")),
		[],
	);

	return { theme, toggle };
};
