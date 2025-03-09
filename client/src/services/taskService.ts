import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://seu-backend.fly.dev/api';

// Tipos para as tarefas
interface Task {
  titulo: string;
  descricao?: string;
  completed: boolean;
  dueDate: string; // Formato: YYYY-MM-DD
}

// Recuperar todas as tarefas do usuário
export const fetchTasks = async (userId: string, token: string) => {
  try {
    const response = await axios.get(`${API_URL}/tasks?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Falha ao carregar tarefas');
  }
};

// Criar nova tarefa
export const createTask = async (taskData: Task, token: string) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Falha ao criar tarefa');
  }
};

// Atualizar tarefa (ex: marcar como concluída ou editar)
export const updateTask = async (
  taskId: string,
  updatedData: { completed?: boolean; titulo?: string; descricao?: string; dueDate?: string },
  token: string
) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/${taskId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Falha ao atualizar tarefa');
  }
};

// Excluir tarefa
export const deleteTask = async (taskId: string, token: string) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Falha ao excluir tarefa');
  }
};