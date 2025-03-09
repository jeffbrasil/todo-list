import React, { useState } from 'react';
import { createTask } from '../services/taskService';

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const token = localStorage.getItem('token') || ''; // Pegando o token do localStorage

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTask = {
      title,
      description: '',
      dueDate: date,
      completed: false,
    };

    try {
      await createTask(newTask, token);
      setTitle('');
      setDate('');
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Data:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default AddTaskForm;
