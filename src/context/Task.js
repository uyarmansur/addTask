import React, { createContext } from "react";
import axios from "axios";

import { useState } from "react";
const TasksContext = React.createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTask = [...tasks, response.data];
    setTasks(createdTask);
  };

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    console.log(response);
    setTasks(response.data);
  };

  const deleteById = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3001/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  const sharedTasksAndMethods = {
    tasks,
    createTask,
    fetchData,
    deleteById,
    editTaskById,
  };

  return (
    <TasksContext.Provider value={sharedTasksAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };

export default TasksContext;
