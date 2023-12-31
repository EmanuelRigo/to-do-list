import React, { useContext } from "react";
import { useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const valor = useContext(TaskContext);
  console.log(valor);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2x1 font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="escribe tarea"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="escribe la descripcion de la tarea"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
