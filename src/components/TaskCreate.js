import React, { useState } from "react";

export default function TaskCreate({
  onCreate,
  task,
  taskFormUpdate,
  onUpdate,
}) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }
    setTaskDesc("");
    setTitle("");
  };
  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz!</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            />
            <button className="task-button update" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Giriniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />
            <label className="task-label">Task Giriniz</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            />
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
