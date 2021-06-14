import React from "react";
import ToDo from './ToDo'
//Testing a installation package below
import Moment from 'react-moment';
// import 'moment-timezone';
import { Formik } from 'formik';


const TodoList = ({todoList, handleToggle, handleFilter}) => {
  return (
    <div>
        {todoList.map(todo => {
            return (
                <div><ToDo todo={todo}  handleToggle={handleToggle} handleFilter={handleFilter}/>
                <Moment />
                </div>
            )
        })}
        <button onClick={handleFilter}>Clear Completed Tasks</button>
    </div>
  );
};

export default TodoList;
