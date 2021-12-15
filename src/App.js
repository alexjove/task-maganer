import { useState } from "react";

function App() {
  
  const [title, setTitle] = useState("")
  const [tasks, setTasks] = useState([])
  const pendingTasks = tasks.length;

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Pending Tasks: {pendingTasks}</p>
      <div>
        <input 
        value={title} 
        onChange={(event) => { 
        setTitle(event.target.value);
      }}
        type="text" 
        />

        <button
        onClick={() => {
          setTasks([title, ...tasks]);
          setTitle("");
        }}
        >
          Add</button>

      </div>
      <ul>
        {tasks.map(task =>{
          return <li>{task}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
