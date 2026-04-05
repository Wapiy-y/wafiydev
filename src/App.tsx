import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BlogPage } from "./pages/BlogPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen font-sans selection:bg-black/10 dark:selection:bg-white/10">
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/blog" element={<BlogPage />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
