import React, { useState, useContext } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/Task";
export default function TaskShow({ task }) {
  const { editTaskById, deleteById } = useContext(TasksContext);

  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedTaskDesc);
  };
  return (
    <div>
      {showEdit ? (
        <div className="task-show">
          <TaskCreate
            task={task}
            taskFormUpdate={true}
            onUpdate={handleSubmit}
          />
        </div>
      ) : (
        <div className="task-show">
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
