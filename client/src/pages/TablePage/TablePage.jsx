import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
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
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

function TablePage() {
  const [tasks, setTasks] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const getTable = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/table/${id}`
      );
      const data = res.data;

      setTasks(data.table.tasks);
    } catch (error) {
      console.error("Error fetching table:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = (task) => {
    setTasks((tasks) => [...tasks, task]);
  };

  const getTaskPos = (id) => tasks.findIndex((task) => task._id === id);

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) return;
    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      const newTasks = arrayMove(tasks, originalPos, newPos);

      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/table/${id}/reorder-tasks`, {
          tasks: newTasks,
        })
        .catch((error) => console.error("Error updating task order:", error));

      return newTasks;
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  useEffect(() => {
    getTable();
  }, []);

  return (
    <div className="tablePage">
      <h1>TablePage</h1>
      <NewTask onSubmit={addTask} tableId={id} />
      {isLoading ? (
        <Loading />
      ) : (
        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <Table tasks={tasks} />
        </DndContext>
      )}
    </div>
  );
}

export default TablePage;
