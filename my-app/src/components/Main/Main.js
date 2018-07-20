import React from "react";
import "./Main.css";


const Main = props => (
    <div className="center">
        <img alt={props.image} src={window.location.origin + `public/gameImages/${props.image}.jpg`} />
    </div>
);
  
  export default Main;