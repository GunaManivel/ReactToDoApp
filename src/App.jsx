// App.jsx
import React, { useState } from "react";
import InputComponent from "./Components/InputComponent";
import TodoDisplay from "./Components/TodoDisplay";
import "./App.css"; // Import CSS file for styling

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedTaskName, updatedDescription, updatedStatus) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            taskName: updatedTaskName,
            description: updatedDescription,
            status: updatedStatus,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="container-fluid text-center">
      <h1 className="my-4 text-success">My Todo</h1>
      <InputComponent addTodo={addTodo} />
      <TodoDisplay todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
