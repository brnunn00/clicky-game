import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       <a class = "navbar-brand" href="/">Clicky Game</a>
      <div className={`d-md-flex d-block flex-row mx-md-auto mx-0 gameMsg ${props.classState}`} id="gameStatus2"> {props.message}</div>
      <ul class = "navbar-nav ml-auto">
        
      <li className="ml-auto scoreCard">Current Score: {props.score} |
                  Best Score: {props.bestscore} </li>
       
      </ul>
    </nav>


  );
}

