import React from "react";
import "./todo.css";

const Todo = (props) => {
  const { id, title, completed } = props.todo;
  return (
    <div className="todo">
      <small>Number of work: {id}</small>
      <h1>Title: {title}</h1>
      <p>Completed: {completed.toString()}</p>
    </div>
  );
};

export default Todo;
