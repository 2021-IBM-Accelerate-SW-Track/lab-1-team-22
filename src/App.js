import React, { useState } from 'react';
import tasks from './tasks.json'
import TodoList from './ToDoList'
import TodoForm from './ToDoForm'
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
 
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 
function App() {

  const classes = useStyles()
  const [ todoList, setTodoList ] = useState(tasks)

  const handleToggle = (id) => {
    let mapped = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodoList(mapped);
  }

  const handleFilter = () => {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    setTodoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...todoList];
    copy = [...copy, { id: todoList.length + 1, task: userInput, complete: false }];
    setTodoList(copy);
  }

//Testing date function below

 return (
   <Card className={classes.root} variant="outlined">
    <CardContent>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
   <TodoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter} addDate={addDate}/>
        </Typography>
        <CardActions>  
        <TodoForm addTask={addTask}/>
      </CardActions>
   </CardContent>
   </Card>
 );
}

export default App;
