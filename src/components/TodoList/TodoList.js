import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import "./TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  //Add new task
  const addTask = () => {
    if (input.trim() === "") {
      alert("You must write something!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  //Toggle completed
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //remove task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //handle input enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          To-Do List
          <span>
            <FaTasks size={40} className="text-primary mb-3" />
          </span>
        </h2>

        <div className="row">
          <input
            type="text"
            id="input-box"
            placeholder="Add Your text"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button id="button" onClick={addTask}>
            Add
          </button>
        </div>

        <ul id="list-container">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "checked" : ""}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  removeTask(task.id);
                }}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <button
          onClick={() => (window.location.href = "/Utility-Hub/")}
          style={{
            padding: "10px 20px",
            borderRadius: "30px",
            backgroundColor: "#65B741",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
export default TodoList;
