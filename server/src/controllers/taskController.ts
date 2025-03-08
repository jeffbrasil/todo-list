// src/controllers/taskController.ts
import { Request, Response, NextFunction } from 'express';
import Task from '../models/Task';

// RF-04: Criar Tarefa
export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  const { title, description, dueDate } = req.body;
  const userId = (req as any).userId;

  try {
    const task = await Task.create({ title, description, dueDate, userId });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// RF-05: Editar Tarefa
export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { title, description, dueDate, completed } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id, { title, description, dueDate, completed }, { new: true });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// RF-06: Excluir Tarefa
export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Tarefa excluída com sucesso' });
  } catch (error) {
    next(error);
  }
};

// RF-07: Marcar Tarefa como Concluída
export const markTaskAsCompleted = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndUpdate(id, { completed: true }, { new: true });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// RF-08: Visualizar Tarefas
export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  const userId = (req as any).userId;

  try {
    const tasks = await Task.find({ userId });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};