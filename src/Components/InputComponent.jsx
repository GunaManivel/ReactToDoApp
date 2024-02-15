// InputComponent.jsx
import React, { useState } from "react";

const InputComponent = ({ addTodo }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (taskName.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        taskName,
        description,
        status: "Not Completed", // Set default status
      };
      addTodo(newTodo);
      setTaskName("");
      setDescription("");
    }
  };

  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center mb-3">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control form-control-sm mb-2"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control form-control-sm mb-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-md-2 d-flex align-items-end">
          <button
            className="btn btn-primary btn-sm mb-2"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
