import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

let order = [];

class App extends Component {
  state = {
    images: ["archer", "data", "janeway", "kirk", "piccard", "riker", "scotty", "sisko", "spock", "tuvok", "wesley", "worf"],
    imageOrder: [],
    alreadyClicked: [],
    score: 0,
    highScore: 0
  }

  randomize = () => {
    if (order.length < 12) {
      const currentImage = this.state.images[(Math.floor(Math.random()*this.state.images.length))];
      if (order.indexOf(currentImage) < 0) {
        order.push(currentImage);
        console.log(order);
        this.randomize();
      } else {
        this.randomize();
      }
    } else {
      this.setState({ imageOrder: order });
      order = [];
    }
  }

  pictureClicked = (name) => {
    if (this.state.alreadyClicked.indexOf(name) < 0) {
      const tempArr = this.state.alreadyClicked;
      tempArr.push(name);
      this.setState({ alreadyClicked: tempArr });
      let tempScore = this.state.score;
      tempScore += 1;
      this.setState({ score: tempScore });
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: tempScore })
        this.randomize();
      } else {
        this.randomize();
      }
    } else {
      this.setState ({ score: 0, alreadyClicked: [] });
      this.randomize();
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar highScore={this.state.highScore}></Navbar>
        <Header currentScore={this.state.score}></Header>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[0]}></Main>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[1]}></Main>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[2]}></Main>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[3]}></Main>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[4]}></Main>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[5]}></Main>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[6]}></Main>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[7]}></Main>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[8]}></Main>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[9]}></Main>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[10]}></Main>
        <Main pictureClicked={this.pictureClicked} image={this.state.imageOrder[11]}></Main>
      </div>
    );
  }
}

export default App;
