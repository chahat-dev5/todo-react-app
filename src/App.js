import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h1>📋 Todo App</h1>

        <div className="input-section">
          <input
  type="text"
  placeholder="Add a new task..."
  value={task}
  onChange={(e) => setTask(e.target.value)}
/>
          <button onClick={addTask}>Add</button>
        </div>

        <ul>
          {tasks.map((t, index) => (
            <li
              key={index}
              className={t.completed ? "completed" : ""}
              onClick={() => toggleTask(index)}
            >
              {t.text}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(index);
                }}
              >
                🚮
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;