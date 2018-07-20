import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const images = ["archer", "data", "janeway", "kirk", "piccard", "riker", "scotty", "sisko", "spock", "tuvok", "wesley", "worf"];
const imageOrder = [];

function randomize() {
  if (imageOrder.length < 12) {
    const currentImage = images[(Math.floor(Math.random()*images.length))];
    if (imageOrder.indexOf(currentImage) < 0) {
      imageOrder.push(currentImage);
      console.log(imageOrder);
      randomize();
    } else {
      ;randomize()
    }
  }
}

randomize();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar highScore={1}></Navbar>
        <Header currentScore={1}></Header>
        <Main image={imageOrder[0]}></Main>
        <Main image={imageOrder[1]}></Main>
        <Main image={imageOrder[2]}></Main>
        <Main image={imageOrder[3]}></Main>
        <Main image={imageOrder[4]}></Main>
        <Main image={imageOrder[5]}></Main>
        <Main image={imageOrder[6]}></Main>
        <Main image={imageOrder[7]}></Main>
        <Main image={imageOrder[8]}></Main>
        <Main image={imageOrder[9]}></Main>
        <Main image={imageOrder[10]}></Main>
        <Main image={imageOrder[11]}></Main>
      </div>
    );
  }
}

export default App;
