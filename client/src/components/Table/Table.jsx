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
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task id={task.id} name={task.name} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
}

export default Table;
