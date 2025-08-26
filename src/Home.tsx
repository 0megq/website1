import seqImage from "./assets/seq.jpg"
import ProjectPreview from "./Projects";

export default function Home() {	
	return (
		<div>
			<h2 className="text-4xl font-bold text-lime-900 mb-8">
				A little about me
			</h2>
			<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
				<div className="flex-1">
					<img src={seqImage}></img>
				</div>
				<div className="flex-1 space-y-4 overflow-visible">
					<p>Hi! I'm Nick Vatanshenas, a game developer and student studying Computer Science at Irvine Valley College.</p>
					<p>This is my super fun website :D</p>
				</div>
			</div>

			<hr className="my-5"></hr>
			<h2 className="text-4xl text-center font-bold text-lime-900 mb-8">
				Recent Projects
			</h2>
			<ProjectPreview id="toy"></ProjectPreview>

			<hr className="my-5"></hr>
			<h2 className="text-2xl font-bold text-lime-900 mb-8">
				Nick Vatanshenas
			</h2>
			<div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
				<div className="flex-1">
					<a href="mailto:nvatanshenas55@gmail.com">nvatanshenas55@gmail.com</a>
				</div>
				<div className="flex-1 flex flex-col">
					<a href="https://www.github.com/0megq">GitHub</a>
					<a href="https://www.linkedin.com/in/nick-vatanshenas-ba0468262/">LinkedIn</a>
				</div>
				<div className="flex-1">
					<p>This</p>
					<p>is</p>
					<p>here</p>
				</div>
			</div>
			<hr className="my-5"></hr>
			<footer>
				<p className="text-sm">© BY NICK VATANSHENAS 2025.</p>
			</footer>

		</div>
	);
}