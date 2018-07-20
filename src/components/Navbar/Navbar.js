import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="navContainer clearfix">
        <h2 className="left">Clicky game</h2>
        <h2 className="right">High Score: {props.highScore}</h2>
    </div>
);
  
  export default Navbar;