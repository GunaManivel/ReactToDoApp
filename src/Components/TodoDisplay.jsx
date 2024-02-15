// TodoDisplay.jsx
import React, { useState } from "react";
import "./Style/TodoDisplay.css"; // Import CSS file for styling

const TodoDisplay = ({ todos, deleteTodo, editTodo }) => {
  const [filter, setFilter] = useState("All");
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedStatus, setEditedStatus] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleEdit = (id, taskName, description, status) => {
    setEditingTodoId(id);
    setEditedTaskName(taskName);
    setEditedDescription(description);
    setEditedStatus(status);
  };

  const cancelEdit = () => {
    setEditingTodoId(null);
    setEditedTaskName("");
    setEditedDescription("");
    setEditedStatus("");
  };

  const saveEdit = (id) => {
    editTodo(id, editedTaskName, editedDescription, editedStatus);
    setEditingTodoId(null);
    setEditedTaskName("");
    setEditedDescription("");
    setEditedStatus("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Completed") return todo.status === "Completed";
    if (filter === "Not Completed") return todo.status !== "Completed";
  });

  return (
    <div className="container">
      <div className="row justify-content-end mb-3">
        <div className="col-md-3 d-flex align-items-center">
          <label className="mr-2">Status Filter:</label>
          <select
            className="btn btn-secondary btn-sm"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </div>
      </div>
      <div className="row">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                {editingTodoId === todo.id ? (
                  <div>
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={editedTaskName}
                      onChange={(e) => setEditedTaskName(e.target.value)}
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    <select
                      className="form-control form-control-sm mb-2"
                      value={editedStatus}
                      onChange={(e) => setEditedStatus(e.target.value)}
                    >
                      <option value="Not Completed">Not Completed</option>
                      <option value="Completed">Completed</option>
                    </select>
                    <button
                      className="btn btn-success mr-2"
                      onClick={() => saveEdit(todo.id)}
                    >
                      Save
                    </button>
                    <button className="btn btn-secondary" onClick={cancelEdit}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <h5 className="card-title">
                      Task Name: &nbsp; {todo.taskName}
                    </h5>
                    <p className="card-text">
                      Description: &nbsp; {todo.description}
                    </p>
                    <div>
                      <label>Status: &nbsp; </label>
                      <select
                        className="btn btn-secondary btn-sm"
                        value={todo.status}
                        onChange={(e) =>
                          editTodo(
                            todo.id,
                            todo.taskName,
                            todo.description,
                            e.target.value
                          )
                        }
                      >
                        <option value="Not Completed">Not Completed</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                    <br />
                    <br />

                    <button
                      className="btn btn-warning mt-2"
                      onClick={() =>
                        handleEdit(
                          todo.id,
                          todo.taskName,
                          todo.description,
                          todo.status
                        )
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mt-2 ml-2"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoDisplay;
