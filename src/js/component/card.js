import React from "react";

const CardCharacters = (props) => {
    return (

        <div className="my-card">
            <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt="imagen de Luke" />
            
            <div className="my-body-text">
            <h3 className="card-title">{props.name}</h3>
                <p>Gender:</p>
                <p>Hair Color:</p>
                <p>Eye Color:</p>
            </div>
            <div className="my-footer">
                <button type="button" className="btn btn-outline-primary">Learn more!</button>
                <button type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>


    )
}

const CardPlanets = (props) => {
    return (

        <div className="my-card">
            <img src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt="imagen de planeta Dagobah" />
            <h3>Aqui va el nombre</h3>
            <div className="my-body-text">
                <p>Population:</p>
                <p>Terrain:</p>
            </div>
            <div className="my-footer">
                <button type="button" class="btn btn-outline-primary">Learn more!</button>
                <button type="button" class="btn btn-outline-warning"><i class="fa-regular fa-heart"></i></button>
            </div>
        </div>


    )
}

export { CardCharacters, CardPlanets }