import React from "react";
import "./style.css";
function Jumbotron(props) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center"}}
      className="jumbotron jumbotron-fluid">
    
         <h2 id="gameStatus"> {props.message}</h2>
    
    </div>
  );
}

export default Jumbotron;
