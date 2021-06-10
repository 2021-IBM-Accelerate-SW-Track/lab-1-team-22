import React from "react";
import ToDo from "./ToDo";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <ToDo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
