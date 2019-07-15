import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export default function Navbar({ children }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class = "navbar-brand" href="/">Clicky Game</a>
      <ul class = "navbar-nav ml-auto">
       
        {children}
      </ul>
    </nav>


  );
}

