import React from "react";
//import { date } from "yup";
import ToDo from './ToDo'
//Testing a installation package below
import Moment from 'react-moment';
// import 'moment-timezone';
//import { Formik } from 'formik';


const TodoList = ({todoList, handleToggle, handleFilter}) => {
  return (
    <div>
        {todoList.map(todo => {
            return (
                <div>
                  <ToDo todo={todo}  handleToggle={handleToggle} handleFilter={handleFilter}/>
                  <Moment format={'MMMM Do YYYY, h:mm:ss a'}/>
                </div>
            )
        })}
        <button onClick={handleFilter}>Clear Completed Tasks</button>
    </div>
  );
};

export default TodoList;
