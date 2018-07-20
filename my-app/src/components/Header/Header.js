import React from "react";
import "./Header.css";

const Header = props => (
    <div className="center">
        <p>Click images to earn points, but you can't click the same one twice!</p>
        <h1>Current Score: {props.currentScore}</h1>
    </div>
);
  
  export default Header;