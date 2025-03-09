import React from 'react';

const TaskItem = ({ task }: { task: any }) => {
  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.dueDate}</p>
      <button>Concluir</button>
      <button>Editar</button>
      <button>Excluir</button>
    </div>
  );
};

export default TaskItem;
