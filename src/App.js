import { useEffect, useContext } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import TasksContext from "./context/Task";
function App() {
  const { fetchData } = useContext(TasksContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h3>Görevler</h3>
      <TaskList />
    </div>
  );
}

export default App;
