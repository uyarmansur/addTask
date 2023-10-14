import React, { useState } from "react";

export default function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTaskDesc("");
    setTitle("");
  };
  return (
    <div className="task-create">
      <h3>Lütfen Task Giriniz!</h3>
      <form className="task-form">
        <label className="task-label">Başlık</label>
        <input className="task-input" value={title} onChange={handleChange} />
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
  );
}
