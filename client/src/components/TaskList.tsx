import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/taskService'; // Função para obter tarefas
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h3>Lista de Tarefas</h3>
      {tasks.length > 0 ? (
        tasks.map((task: any) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>Não há tarefas.</p>
      )}
    </div>
  );
};

export default TaskList;