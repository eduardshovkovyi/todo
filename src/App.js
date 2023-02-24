import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import CreateTaskForm from "./components/CreateTaskForm";
import TaskItem from "./components/TaskItem";
import Modal from "./components/Modal";

import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import "./App.scss";

import { themeColor } from "./constants";

function App() {
  const [theme, setTheme] = useState(themeColor.light);
  const [listTask, setListTask] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const addTask = (userTask) => {
    console.log('userTask', userTask);
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      name: userTask,
    };
    setListTask([...listTask, newTask]);
  };

  const updateNameTask = (userTask) => {
    setListTask([
      ...listTask.filter((item) => {
        if (item.id === userTask.id) {
          item.name = userTask.name;
        }
        return item;
      }),
    ]);
    setIsOpenModal(false);
    setCurrentTask({});
  };

  const removeTask = (id) => {
    setListTask([...listTask.filter((item) => item.id !== id)]);
  };

  const switchTheme = () => {
    theme === themeColor.light
      ? setTheme(themeColor.dark)
      : setTheme(themeColor.light);
  };

  const updateTask = (task) => {
    setIsOpenModal(true);
    setCurrentTask(task);
  };

  return (
    <ThemeProvider theme={theme === themeColor.light ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app">
        <button className="switchButton" onClick={switchTheme}>
          Switch to{" "}
          {theme === themeColor.light ? themeColor.dark : themeColor.light}{" "}
          theme
        </button>
        <h1>Timedox React Task</h1>
        <CreateTaskForm addTask={addTask} />
        <h2>List of tasks</h2>
        <div className="taskList">
          {listTask.map((task) => (
            <TaskItem
              task={task}
              removeTask={removeTask}
              updateTask={updateTask}
              key={task.id}
            />
          ))}
        </div>
        {isOpenModal && (
          <Modal
            closeModal={setIsOpenModal}
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
            updateNameTask={updateNameTask}
          />
        )}
      </div>
    </ThemeProvider>
  );
}
export default App;
