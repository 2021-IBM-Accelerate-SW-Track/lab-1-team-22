import React, { useState } from "react";
//import { useForm } from 'react-hook-form'


const TodoForm = ({ addTask }) => {
  const [userTask, setUserTask] = useState("");

  const handleChange = (e) => {
    setUserTask(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userTask);
    setUserTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="todo"
        value={userTask}
        placeholder="Add a new Task"
      />
      <button> Submit</button>
    </form>
  );
};
export default TodoForm;

