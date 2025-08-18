import React from "react";


function Navbar() {
	return (
		<nav className="">
			<h1 className="text-xl text-center">My Website :D</h1>
			<div className="container mx-auto flex space-x-8 items-center justify-center">
				<a>click</a>
				<a className="border-r-8">this</a>
				<a>link</a>
			</div>
		</nav>
	)
}

export default Navbar;