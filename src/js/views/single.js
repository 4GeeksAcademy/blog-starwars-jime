import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// 	 console.log (params) 
	//   const {theid}= useParams ()
	useEffect (()=>{
		actions.loadInfoPerson (params.theid)
	},[])

	
	return (
		<div className="my-card-single">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} alt="imagen de personaje" />
			<h2 className= "text-warning">{store.person?.properties?.name}</h2>
			<h3>Género: {store.person?.properties?.gender}</h3>
			<h3>Color de cabello: {store.person?.properties?.hair_color}</h3>
			<h3>Color de ojos: {store.person?.properties?.eye_color}</h3>
			<h3>Altura: {store.person?.properties?.height} cms.</h3>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
