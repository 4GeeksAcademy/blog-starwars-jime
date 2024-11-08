import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardCharacters, CardPlanets } from "../component/card";


export const Home = () => {
	const [people, setPeople] = useState([])
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => setPeople(data.results))
			.catch(err => console.error(err))
	}, [])

	const { store } = useContext(Context)


	return <div className="container mt-5"> 
			
				<h1 className="text-danger">Characters</h1>
				<div className="border border-light my-carousel">
				{
					people.map((item, index)=>{
						return (
							<CardCharacters key={index} name={item.name}/>
						)
					})
				}
				
				</div>
			


			<div className="container mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="border border-light my-carousel">
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


		

		 </div>
	
};
