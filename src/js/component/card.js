import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardCharacters = (props) => {
    const { actions, store } = useContext(Context)
    const isFavorite = store.favorites.includes(props.name)
    return (

        <div className="my-card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} alt="imagen de Luke" />

            <div className="my-body-text">
                <h4 className="card-title">{props.name}</h4>
            </div>
            <div className="my-footer">
                <Link to={"/single/" + props.uid} >
                    <button type="button" className="btn btn-outline-primary">Learn more!</button>
                </Link>
                <button type="button" onClick={() => actions.myFavorites(props.name)} className="btn btn-outline-warning">
                    <i className={`fa-regular fa-heart ${isFavorite ? "text-dark" : "text-warning"}`}></i>
                </button>
            </div>
        </div>


    )
}

const CardPlanets = (props) => {
    const { actions, store } = useContext(Context)
    const isFavorite = store.favorites.includes(props.name)
    return (

        <div className="my-card">
            <img src={props.uid == 1 ?
                "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg" :
                `https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} alt={props.name} />
            <div className="my-body-text">
                <h4 className="card-title">{props.name}</h4>
            </div>
            <div className="my-footer">
                <Link to={"/singlePlanet/" + props.uid} >
                    <button type="button" className="btn btn-outline-primary">Learn more!</button>
                </Link>
                <button type="button" onClick={() => actions.myFavorites(props.name)} className="btn btn-outline-warning">
                    <i className={`fa-regular fa-heart ${isFavorite ? "text-dark" : "text-warning"}`}></i>
                </button>
            </div>
        </div>


    )
}

const CardVehicles = (props) => {
    const { actions, store } = useContext(Context)
    const isFavorite = store.favorites.includes(props.name)
    return (

        <div className="my-card">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`} alt="imagen de vehiculo" />

            <div className="my-body-text">
                <h4 className="card-title">{props.name}</h4>
            </div>
            <div className="my-footer">
                <Link to={"/singleVehicle/" + props.uid} >
                    <button type="button" className="btn btn-outline-primary">Learn more!</button>
                </Link>
                <button type="button" onClick={() => actions.myFavorites(props.name)} className="btn btn-outline-warning">
                    <i className={`fa-regular fa-heart ${isFavorite ? "text-dark" : "text-warning"}`}></i>
                </button>
            </div>
        </div>


    )
}

export { CardCharacters, CardPlanets, CardVehicles }