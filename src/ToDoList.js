import React from "react";
import ToDo from './ToDo'
//Testing an installation package below
import Moment from 'react-moment';
// import 'moment-timezone';

 //const newAddTime = Date.now()
const TodoList = ({todoList, handleToggle, handleFilter}) => {
  return (
    <div>
        {todoList.map(todo => {
            return (
                <div><ToDo todo={todo}  handleToggle={handleToggle} handleFilter={handleFilter}/>
                <Moment local /></div>
            )
        })}
        <button onClick={handleFilter}>Clear Completed Tasks</button>
    </div>
  );
};

export default TodoList;
