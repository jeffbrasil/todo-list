import React from 'react';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Minhas Tarefas</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default HomePage;
