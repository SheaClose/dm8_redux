import React, { Component } from "react";
import { connect } from "react-redux";
import { notTodo } from "./ducks/reducer";
//import './.css';

class Todos extends Component {
  render() {
    const todos = this.props.todos.map((cur, i) => (
      <div
        onClick={() => this.props.notTodo("new not todo")}
        key={i}
        className=""
      >
        {cur}
      </div>
    ));
    return <div className="">{todos}</div>;
  }
}
export default connect(state => state, { notTodo })(Todos);
