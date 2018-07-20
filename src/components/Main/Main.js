import React from "react";
import "./Main.css";
import archer from "./archer.jpg"


const Main = props => (
    <div className="imageContainer">
        <span onClick={() => props.pictureClicked(props.name)} className="picture">
            <img className="image" alt={props.image} src={props.image} />
        </span>
    </div>
);
  
  export default Main;