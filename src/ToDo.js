import React from "react";

// 
// ADD A MATERIAL UI STYLE TO THE STRIKETHROUGH LATER
// This is the component handing the ToDo functionality. This basically handles the strikethrough function so that we can later delete it

const ToDo = ({todo}) => {
  return (
    <div className={todo.complete ? "strike": ""}>
 {todo.task}
    </div>
  );
};

export default ToDo;