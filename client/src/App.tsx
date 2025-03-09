import React, { useState } from 'react';
import './App.css'; // Importando os estilos

function App() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para adicionar a tarefa
    console.log(`Tarefa: ${task}, Data: ${date}`);
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <label>
          Data:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <h2>Minhas Tarefas</h2>
      {/* Aqui você pode listar as tarefas */}
    </div>
  );
}

export default App;
