import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTask);
  };
  const deleteById = (id) => {
    const afterDeletingTasks=tasks.filter((task)=>{
      return task.id !== id;
    })
    setTasks(afterDeletingTasks)
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h3>Görevler</h3>
      <TaskList tasks={tasks} onDelete={deleteById} />
    </div>
  );
}

export default App;
