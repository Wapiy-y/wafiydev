import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { getPost } from "./lib/posts";
import { useRoute } from "./lib/useRoute";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";
import { Connect } from "./sections/Connect";
import { Intro } from "./sections/Intro";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Writing } from "./sections/Writing";

export default function App() {
	const route = useRoute();
	const post = route.page === "post" ? getPost(route.slug) : undefined;

	return (
		<div id="top" className="relative flex min-h-screen flex-col">
			<a href="#main" className="skip-link">
				Skip to content
			</a>

			<Header page={route.page === "home" ? "home" : "blog"} />

			<div className="flex-1">
				{route.page === "home" ? (
					<main id="main">
						<Intro />
						<Projects />
						<Skills />
						<Writing />
						<Connect />
					</main>
				) : route.page === "blog" ? (
					<Blog />
				) : post ? (
					<Post post={post} />
				) : (
					<main id="main" className="shell pb-20">
						<div className="mx-auto max-w-[620px]">
							<h1 className="text-[22px] font-semibold text-ink">
								Post not found
							</h1>
							<p className="mt-3 text-[15.5px] text-body">
								<a
									href="#/blog"
									className="text-accent underline decoration-accent/40 underline-offset-[3px]"
								>
									Back to writing
								</a>
							</p>
						</div>
					</main>
				)}
			</div>

			<Footer />
		</div>
	);
}
