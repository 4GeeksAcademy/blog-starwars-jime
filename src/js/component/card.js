import React from "react";

const Card = (props) => {
    return (

        <div className="my-card">
            <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
            <h3>Aqui va el nombre</h3>
            <div className="my-body-text">
                <p>Gender</p>
                <p>Hair Color</p>
                <p>Eye Color</p>
            </div>
            <div className="my-footer">
                <button>Learn more..</button>
                <button>Like</button>
            </div>
        </div>


    )
}

export default Card