import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light mb-3">
			<div className="container">
				<Link to="/">
					<img className="my-logo" src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png" alt="logo Star Wars" />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((item, index) => (
								<li key={index} onClick={()=>actions.myFavorites(item)}>
									<a className="dropdown-item" href="#">{item}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav >
	);
};
