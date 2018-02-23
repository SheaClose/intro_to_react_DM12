import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      list: []
    };
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  handleClick() {
    let list = this.state.list.slice();
    list.push(this.state.input);
    this.setState({ list: list });
  }

  render() {
    const list = this.state.list.map((val, ind) => <li key={ind}>{val}</li>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div className="">
            <input
              onChange={event => this.handleChange(event)}
              placeholder="new todo"
            />
            <button onClick={() => this.handleClick()} type="button">
              Submit
            </button>
          </div>
        </header>
        {list}
      </div>
    );
  }
}

export default App;

// some other js file....

class Dog extends Component {
  render() {
    return (
      <ul>
        <li>Like nuggs</li>
        <li>Much Wow</li>
        <li>Best Friend</li>
        <li>Woof!</li>
      </ul>
    );
  }
}
