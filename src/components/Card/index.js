import React from "react";
import "./style.css";
import "./animate.css"
function Card(props) {
    var style = {
        backgroundImage: "url("+props.image+")"
    }
    return (
<div role="img" className="cusCard animate rubberBand" onClick={() => props.checkGuess(props.id) 
    } style={style}/>
      
      
      
// </div>

);
}

export default Card;