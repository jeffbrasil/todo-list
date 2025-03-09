import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/taskService'; // função do taskService
import { Task } from '../task/types'; // Defina o tipo da tarefa
import AddTaskForm from './AddTaskForm'; // Importe o formulário


const TaskPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <AddTaskForm /> {/* Exibe o formulário para adicionar tarefas */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? 'Concluída' : 'Pendente'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
