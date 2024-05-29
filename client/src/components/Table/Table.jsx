import React from "react";
import { Task } from "../Task/Task";
import "./table.css";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function Table({ tasks }) {
  return (
    <div className="table">
      <h1>Table</h1>
      {tasks ? (
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <Task
              id={task._id}
              name={task.name}
              color={task.color}
              key={task._id}
            />
          ))}
        </SortableContext>
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
    </div>
  );
}

export default Table;
