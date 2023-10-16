import React, { useContext } from "react";
import TaskShow from "./TaskShow";
import TasksContext from "../context/Task";
export default function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <div className="task-list">
      {tasks.map((item, index) => (
        <TaskShow key={index} task={item} />
      ))}
    </div>
  );
}
