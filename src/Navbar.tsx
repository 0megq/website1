import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="container mx-auto px-4 py-8">
			<Link to="/">
				<h1 className="text-4xl text-center py-10 text-lime-950">Nick Vatanshenas</h1>
			</Link>
			<div className="container mx-auto flex space-x-8 items-center justify-center text-lime-950">
				<Link to="/">Home</Link>
				{/* <Link to="/projects">Projects</Link>
				<Link to="/blog">Blog</Link> */}
			</div>
		</nav>
	)
}

export default Navbar;