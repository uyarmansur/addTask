import React from "react";
import TaskShow from "./TaskShow";

export default function TaskList({ tasks }) {
  console.log(tasks);
  return (
    <div>
      {tasks.map((item, index) => (
        <TaskShow key={index} task={item} />
      ))}
    </div>
  );
}
