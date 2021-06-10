import React from "react";
import TodoList from "./ToDoList";
import TodoForm from "./ToDoForm";

// Here we are making the App Component. We set some tasks to show up on the home page so it's not empty. We assign the tasks some random IDs so those ids can be what we modify and delete. We also set an empty task so we can "add" tasks to the list later. We then add the functionality for adding, modifying and deleting tasks. We then prop drill those down to the list and form components. 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
              task: "Brush Teeth",
              id: "3",
              completed: false
            },
            {
              task: "Make Bed",
              id: "2",
              completed: false
            },
            {
              task: "Put on Pajamas",
              id: "27",
              completed: false
            },
            {
              task: "Dance to Music",
              id: "18",
              completed: false
            },
            {
              task: "Go to sleep",
              id: "10",
              completed: false
            }
      ],
      todo: ""
    };
  }

  addTodo = (e) => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ""
    });
  };

  changeTodo = (e) => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = (id) => {
    let todos = this.state.todos.slice();
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = (e) => {
    e.preventDefault();
    let todos = this.state.todos.filter((todo) => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;