import React from "react";
import TaskShow from "./TaskShow";

export default function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="task-list">
      {tasks.map((item, index) => (
        <TaskShow
          key={index}
          task={item}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
