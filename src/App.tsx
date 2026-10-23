import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Stack } from "./sections/Stack";
import { Writing } from "./sections/Writing";

export default function App() {
	return (
		<div id="top" className="relative min-h-screen">
			<a href="#main" className="skip-link">
				Skip to content
			</a>

			<div aria-hidden="true" className="site-grid" />

			<Header />

			<main id="main" className="relative z-10">
				<Hero />
				<Stack />
				<Experience />
				<Projects />
				<Writing />
				<Contact />
			</main>

			<Footer />
		</div>
	);
}
