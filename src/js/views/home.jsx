import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardCharacters, CardPlanets } from "../component/card";


export const Home = () => { 
	const { store } = useContext (Context)

	
	return (
		<>
			<div className="container mt-5">
				<h1 className="text-danger">Characters</h1>
				<div className="border border-light my-carousel">
					<CardCharacters />
					<CardCharacters />
					<CardCharacters />
					<CardCharacters />
					<CardCharacters />
					<CardCharacters />
					<CardCharacters />
					<CardCharacters />
				</div>
			</div>
		

<div className="container mt-5">
	<h1 className="text-danger">Planets</h1>
	<div className="border border-danger my-carousel">
		<CardPlanets />
		<CardPlanets />
		<CardPlanets />
		<CardPlanets />
		<CardPlanets />
		<CardPlanets />
		<CardPlanets />
		<CardPlanets />
	</div>
</div> 


</>
		// <div className="text-center mt-5">
		// 	<h1>Star Wars API</h1>
		// 	{
		// 		people.map((item, index) => {
		// 			return (
		// 				<Card key={index} name={item.name} uid={item.uid}></Card>
		// 			)
		// 		})
		// 	}

		// </div>
	)
};
