import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Connect } from "./sections/Connect";
import { Intro } from "./sections/Intro";
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
				<Intro />
				<Projects />
				<Skills />
				<Connect />
			</main>

			<Footer />
		</div>
	);
}
