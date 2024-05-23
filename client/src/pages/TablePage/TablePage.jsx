import React, { useState, useEffect } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Table from "../../components/Table/Table";
import "./TablePage.css";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { NewTask } from "../../components/NewTaks/NewTask";

function TablePage() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Walk the dogs" },
    { id: 2, name: "Pet the rabbit" },
    { id: 3, name: "Feed the cats" },
  ]);

  const addTask = (name) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, name }]);
  };

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) return;
    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <div className="tablePage">
      <h1>TablePage</h1>
      <NewTask onSubmit={addTask} />
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Table tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default TablePage;
