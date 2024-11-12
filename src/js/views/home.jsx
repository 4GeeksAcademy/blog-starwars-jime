import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardCharacters, CardPlanets, CardVehicles } from "../component/card";


export const Home = () => {
	const { store, actions } = useContext(Context)
	useEffect(() => {
		actions.loadPeople()
		actions.loadPlanet()
		actions.loadVehicle()
	}, [])

	return <div className="container mt-5">

		<h1 className="text-warning">Personajes</h1>
		<div className="border border-light my-carousel">
			{
				store.people.map((item, index) => {
					return (
						<CardCharacters key={index} name={item.name}
							uid={item.uid} />
					)
				})
			}

		</div>



		<div className="container mt-5">
			<h1 className="text-warning">Planetas</h1>
			<div className="border border-light my-carousel">
				{
					store.planets.map((item, index) => {
						return (
							<CardPlanets key={index} name={item.name}
								uid={item.uid} />
						)
					})
				}

			</div>
		</div>	

		<div className="container mt-5">
				<h1 className="text-warning">Vehículos</h1>
				<div className="border border-light my-carousel">
					{
						store.vehicles.map((item, index) => {
							return (
								<CardVehicles key={index} name={item.name}
									uid={item.uid} />
							)
						})
					}

				</div>


		</div>
	</div>






};
