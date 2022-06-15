import React from "react";

const Modal = ({ closeModal, currentTask, setCurrentTask, updateNameTask }) => {
  const handleChange = (event) => {
    setCurrentTask({
      id: currentTask.id,
      name: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateNameTask(currentTask);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className="modal" onClick={() => closeModal(false)}>
      <div className="content" onClick={(event) => event.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={currentTask.name}
            onKeyDown={handleKeyPress}
            onChange={handleChange}
          />
          <div className="button-wrap">
            <button disabled={!currentTask.name}>Update</button>
            <button onClick={() => closeModal(false)}>Back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
