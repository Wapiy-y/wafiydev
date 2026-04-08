import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BlogPage } from "./pages/BlogPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen font-sans flex flex-col">
				<Navbar />
				<div className="flex-1">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/blog" element={<BlogPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
