import React, { useContext } from "react";
import { TaskContext } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const valor = useContext(TaskContext);
  console.log(valor);
  return (
    <main className="bg-zinc-900 h-screen p-10">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
