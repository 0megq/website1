import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<Link to="/">
				<h1 className="text-xl text-center">My Website :D</h1>
			</Link>
			<div className="container mx-auto flex space-x-8 items-center justify-center">
				<Link to="/">Home</Link>
				<a>fake link</a>
				<Link to="/dashboard">Dashboard</Link>
			</div>
		</nav>
	)
}

export default Navbar;