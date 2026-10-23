import { useEffect, useState } from "react";

/** Highlights the nav item for the section currently filling the viewport. */
export const useScrollSpy = (ids: readonly string[]) => {
	const [active, setActive] = useState(ids[0] ?? "");

	useEffect(() => {
		const sections = ids
			.map((id) => document.getElementById(id))
			.filter((section): section is HTMLElement => section !== null);

		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const [mostVisible] = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (mostVisible) setActive(mostVisible.target.id);
			},
			{ rootMargin: "-42% 0px -46% 0px", threshold: [0, 0.2, 0.5, 1] },
		);

		for (const section of sections) observer.observe(section);

		return () => observer.disconnect();
	}, [ids]);

	return active;
};
