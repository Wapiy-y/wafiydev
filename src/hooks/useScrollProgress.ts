import { useEffect, useState } from "react";

/** 0 → 1 progress of the document scroll, updated at most once per frame. */
export const useScrollProgress = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let frame = 0;

		const update = () => {
			frame = 0;
			const doc = document.documentElement;
			const max = doc.scrollHeight - doc.clientHeight;
			setProgress(max > 0 ? Math.min(doc.scrollTop / max, 1) : 0);
		};

		const schedule = () => {
			if (!frame) frame = window.requestAnimationFrame(update);
		};

		frame = window.requestAnimationFrame(update);
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("resize", schedule);

		return () => {
			window.removeEventListener("scroll", schedule);
			window.removeEventListener("resize", schedule);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	return progress;
};
