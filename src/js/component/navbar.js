import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<div className="container">
				<Link to="/">
					<img className="my-logo" src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png" alt="logo Star Wars"/>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites 0
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav >
	);
};
