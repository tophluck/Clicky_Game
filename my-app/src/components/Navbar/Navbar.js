import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div>
        <p className="left">Clicky game</p>
        <p className="right">High Score: {props.highScore}</p>
    </div>
);
  
  export default Navbar;