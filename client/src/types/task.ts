export interface Task {
    id: string;
    titulo: string;
    descricao?: string;
    completed: boolean;
    dueDate: string; // Formato: YYYY-MM-DD
    userId: string; // ID do usuário que criou a tarefa
  }