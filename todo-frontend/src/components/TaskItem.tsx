// exibir cada tarefa individual na lista.
import React from "react";

interface TaskItemProps {
  task: { id: string; title: string; completed: boolean };
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div>
      <p>{task.title}</p>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? "Desmarcar como concluída" : "Marcar como concluída"}
      </button>
      <button onClick={() => onDelete(task.id)}>Excluir</button>
    </div>
  );
};

export default TaskItem;
