function App() {
  
  const pendingTasks = 7;
  const tasks = ["Do dishes", "Buy milk", "Walk the dog"];

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Pending Tasks: {pendingTasks}</p>
      <form>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map(task =>{
          return <li>{task}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
