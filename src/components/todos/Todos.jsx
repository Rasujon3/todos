import React, { useEffect, useState } from "react";
import Todo from "../todo/Todo";
import "./todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <>
      <h1 className="total">Total Works: {todos.length}</h1>
      <div className="todos">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id}></Todo>
        ))}
      </div>
    </>
  );
};

export default Todos;
