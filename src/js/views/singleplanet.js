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
		<div className="my-card-single">
			<h2 className="text-warning">{store.planet?.properties?.name}</h2>
			<h3>Población: {store.planet?.properties?.population} hab.</h3>
			<h3>Terreno: {store.planet?.properties?.terrain}</h3>	
			<h3>Clima: {store.planet?.properties?.climate}</h3>	
			<h3>Diámetro: {store.planet?.properties?.diameter} kms.</h3>			
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
