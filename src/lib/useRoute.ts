import { useEffect, useRef, useState } from "react";

export type Route =
	| { page: "home" }
	| { page: "blog" }
	| { page: "post"; slug: string };

const parse = (hash: string): Route => {
	const path = hash.replace(/^#\/?/, "");

	if (path === "blog") return { page: "blog" };
	if (path.startsWith("blog/")) {
		return { page: "post", slug: decodeURIComponent(path.slice(5)) };
	}
	return { page: "home" };
};

export const useRoute = () => {
	const [route, setRoute] = useState<Route>(() => parse(location.hash));
	const firstRender = useRef(true);

	useEffect(() => {
		const onChange = () => setRoute(parse(location.hash));

		window.addEventListener("hashchange", onChange);
		return () => window.removeEventListener("hashchange", onChange);
	}, []);

	// Only jump to the top when the page itself changes — plain section anchors
	// (#projects) must keep their native scroll behaviour.
	const pageKey = route.page === "post" ? `post:${route.slug}` : route.page;

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [pageKey]);

	return route;
};
