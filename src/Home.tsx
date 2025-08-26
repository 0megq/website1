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
			<div>
				<a href="mailto:nvatanshenas55@gmail.com">nvatanshenas55@gmail.com</a>
			</div>
			<footer>
				<p>© BY NICK VATANSHENAS 2025.</p>
			</footer>

		</div>
	);
}