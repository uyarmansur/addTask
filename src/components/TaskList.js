import React from "react";
import TaskShow from "./TaskShow";

export default function TaskList({ tasks, onDelete }) {
  return (
    <div className="task-list">
      {tasks.map((item, index) => (
        <TaskShow key={index} task={item} onDelete={onDelete} />
      ))}
    </div>
  );
}
