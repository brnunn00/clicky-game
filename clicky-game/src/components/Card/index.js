import React from "react";
import "./style.css";

function Card(props) {
    return (
<div className="card cusCard" onClick={() => props.checkGuess(props.id)} >
      
        <img className="card-img imgCus" src={props.image} /> 
      
</div>

);
}

export default Card;