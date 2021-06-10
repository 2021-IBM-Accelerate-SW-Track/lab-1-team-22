import React from "react";

// This is the component handing the ToDo functionality. This basically handles the strikethrough function so that we can later delete it

const ToDo = (props) => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default ToDo;