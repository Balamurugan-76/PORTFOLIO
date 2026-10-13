import React, { useState, useEffect } from "react";

function Bala() {

  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dark, setDark] = useState(false);

  // Load user when page starts
  useEffect(() => {
    setName("Balamurugan");
  }, []);

  // Add task
  const addTask = () => {
    if (task === "") {
      alert("Enter a task");
    } else {
      setTasks([...tasks, { name: task, done: false }]);
      setTask("");
    }
  };

  // Complete task
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completed = tasks.filter(t => t.done).length;

  return (
    <div style={{
      background: dark ? "#222" : "#eee",
      color: dark ? "white" : "black",
      minHeight: "100vh",
      padding: "30px"
    }}>

      <h1>Task Management Dashboard</h1>

      <h2>Welcome, {name} 👋</h2>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <hr />

      <h3>Total Tasks: {tasks.length}</h3>
      <h3>Completed: {completed}</h3>
      <h3>Pending: {tasks.length - completed}</h3>

      <hr />

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add Task</button>

      <h2>My Tasks</h2>

      {tasks.map((t, index) => (
        <div key={index}>
          <span>
            {t.done ? "✅ " : "⬜ "}
            {t.name}
          </span>

          <button onClick={() => completeTask(index)}>
            {t.done ? "Undo" : "Complete"}
          </button>

          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      ))}

    </div>
  );
}

export default Bala;