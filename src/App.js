import React, { useState } from 'react';
import tasks from './tasks.json'
import TodoList from './ToDoList'
import TodoForm from './ToDoForm'
import "./styles.css";
 
import './App.css';
 
function App() {
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

 return (
   <div className="App">
       <TodoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <TodoForm addTask={addTask}/>
   </div>
 );
}
 
export default App;