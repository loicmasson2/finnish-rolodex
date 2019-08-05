import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "fra"
        },
        {
          name: "Dracula",
          id: "dra"
        },
        {
          name: "Zombie",
          id: "zom"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
