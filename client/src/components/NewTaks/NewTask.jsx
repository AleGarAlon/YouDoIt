import React, { useState } from "react";
import axios from "axios";
import "./NewTask.css";

export const NewTask = ({ onSubmit, tableId, userId }) => {
  const [newTask, setNewTask] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = async () => {
    if (!newTask) return;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/task/${tableId}`,
        {
          name: newTask,
          color: color,
          userId: userId,
        }
      );

      onSubmit(response.data);

      setNewTask("");
      setColor("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        className="newTask"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <select
        className="colorSelect"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="">Select color</option>
        <option value="white">White</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
        <option value="orange">Orange</option>
        <option value="black">Black</option>
        <option value="gray">Gray</option>
      </select>
      <button onClick={handleSubmit} className="button">
        Add
      </button>
    </div>
  );
};
