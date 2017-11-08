import React, { Component } from "react";
import Todos from "./Todos";
import { connect } from "react-redux";
import "./App.css";
import { addTodo } from "./ducks/reducer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }
  handleChange(newTodo) {
    this.setState({ newTodo });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input
            onChange={e => this.handleChange(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="Add Todo"
          />
          <button
            onClick={() => this.props.addTodo(this.state.newTodo)}
            type="submit"
          >
            Submit
          </button>
        </header>
        <Todos />
      </div>
    );
  }
}

export default connect(null, { addTodo })(App);
