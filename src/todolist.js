import React, { Component } from "react";
import Todo from "./todo";
import TodoListForm from "./todolistform";
import "./TodoList.css";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: [] };
    this.addItems = this.addItems.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  addItems(items) {
    console.log(items);
    this.setState({
      todo: [...this.state.todo, items],
    });
  }
  remove(id) {
    this.setState({
      todo: this.state.todo.filter((to) => to.id !== id),
    });
  }
  update(id, updatedTask) {
    const updatedTodo = this.state.todo.map((to) => {
      if (to.id === id) {
        return { ...to, todo: updatedTask };
      }
      return to;
    });
    this.setState({ todo: updatedTodo });
  }
  toggleCompletion(id) {
    const updatedTodo = this.state.todo.map((to) => {
      if (to.id === id) {
        return { ...to, completed: !to.completed };
      }
      return to;
    });
    this.setState({ todo: updatedTodo });
  }
  render() {
    const newTodos = this.state.todo.map((todo) => (
      <Todo
        value={todo.todo}
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        remove={() => this.remove(todo.id)}
        updatedTodos={this.update}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          Todo List! <span>A simple React Todo List App.</span>
        </h1>
        <div className="ul">
          {newTodos}
          <TodoListForm addItems={this.addItems} />
        </div>
      </div>
    );
  }
}
export default TodoList;
