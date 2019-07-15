import React from "react";
import "./style.css";

function Card(props) {
    var style = {
        backgroundImage: "url("+props.image+")"
    }
    return (
<div role="img" className="cusCard" onClick={() => props.checkGuess(props.id) 
    } style={style}/>
      
      
      
// </div>

);
}

export default Card;