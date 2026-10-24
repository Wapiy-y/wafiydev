import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

export default function App() {
	return (
		<div id="top" className="relative min-h-screen">
			<a href="#main" className="skip-link">
				Skip to content
			</a>

			<Header />

			<main id="main">
				<Hero />
				<Experience />
				<Projects />
				<Skills />
				<Education />
				<Contact />
			</main>

			<Footer />
		</div>
	);
}
