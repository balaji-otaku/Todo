import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, task: this.props.value };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updatedTodos(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleTodo() {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <span
            className={
              this.props.completed ? " Todo-task completed" : "Todo-task"
            }
            onClick={this.handleTodo}
          >
            {this.props.value}
          </span>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i class="fa-solid fa-pen"></i>
            </button>
            <button onClick={this.props.remove}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}
export default Todo;
