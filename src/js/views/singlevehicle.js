import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// 	 console.log (params) 
	//   const {theid}= useParams ()
	useEffect (()=>{
		actions.loadInfoVehicle (params.theid)
	},[])
	return (
		<div className="my-card-single">
			<h2 className="text-warning">{store.vehicle?.properties?.name}</h2>
			<h3>Modelo: {store.vehicle?.properties?.model}</h3>
			<h3>Fabricante: {store.vehicle?.properties?.manufacturer}</h3>	
			<h3>Pasajeros: {store.vehicle?.properties?.passengers}</h3>	
			<h3>Longitud: {store.vehicle?.properties?.length} mts.</h3>			
		</div>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};
