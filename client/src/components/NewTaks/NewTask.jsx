import React, { useState } from "react";
import "./NewTask.css";

export const NewTask = ({ onSubmit }) => {
  const [NewTask, setNewTask] = useState("");

  const handleSubmit = () => {
    if (!NewTask) return;

    onSubmit(NewTask);

    setNewTask("");
  };

  return (
    <div className="container">
      <input
        type="text"
        className="newTask"
        value={NewTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleSubmit} className="button">
        Add
      </button>
    </div>
  );
};
