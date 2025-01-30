import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    if (!title || !description) return console.log("Vacio no se puede");
    createTask(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crear Tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Titulo"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
          value={title}
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button
          className="bg-indigo-500 px-3 p-1 text-white"
          onClick={handleSubmit}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
