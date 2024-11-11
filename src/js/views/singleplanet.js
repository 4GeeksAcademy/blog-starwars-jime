import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// 	 console.log (params) 
	//   const {theid}= useParams ()
	useEffect (()=>{
		actions.loadInfoPlanet (params.theid)
	},[])
	return (
		<div className="jumbotron">
			<h1>Nombre: {store.planet?.properties?.name}</h1>
			<h1>Población: {store.planet?.properties?.population} habitantes</h1>
			<h1>Terreno: {store.planet?.properties?.terrain}</h1>
			{/* <h1>{store.person?.properties?.gender}</h1>
			<h1>{store.person?.properties?.hair_color}</h1> */}
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
