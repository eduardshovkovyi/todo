import React, { useState } from "react";

const CreateTaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
    setTask("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={task}
        type="text"
        placeholder="Enter task name..."
        onKeyDown={handleKeyPress}
        onChange={handleChange}
      />
      <button disabled={!task}>Add task</button>
    </form>
  );
};

export default CreateTaskForm;
