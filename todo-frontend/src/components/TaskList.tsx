// src/components/TaskList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Aqui você pode fazer a chamada à API para buscar as tarefas
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/tasks");
        setTasks(response.data);
      } catch (err) {
        console.error("Erro ao buscar tarefas", err);
      }
    };

    fetchTasks();
  }, []);

  const handleToggleComplete = (id: string) => {
    // Função para marcar/desmarcar tarefas como concluídas
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id: string) => {
    // Função para excluir uma tarefa
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
