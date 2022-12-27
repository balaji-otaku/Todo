import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css";

class TodoListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = { ...this.state, id: uuidv4(), completed: false };
    this.props.addItems(newTodo);
    this.setState({ todo: "" });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label style={{ display: "block" }} htmlFor="newTodo">
          New Todo
        </label>
        <input
          id="newTodo"
          placeholder="New Todo"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button>ADD TODO</button>
      </form>
    );
  }
}
export default TodoListForm;
