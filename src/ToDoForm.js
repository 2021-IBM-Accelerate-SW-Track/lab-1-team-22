import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  }
});



const TodoForm = ({ addTask }) => {
  const [userTask, setUserTask] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setUserTask(e.currentTarget.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
     addTask(userTask);
     setUserTask("");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Input
      data-testid="new-item-input"
        onChange={handleChange}
        type="input"
        name="todo"
        value={userTask}
        placeholder="Add a new Task"
      />
      <Button 
      variant="outlined" 
      color="primary"
      type="submit"
      data-testid="new-item-button">Submit</Button>
    </form>
  );
};
export default TodoForm;

