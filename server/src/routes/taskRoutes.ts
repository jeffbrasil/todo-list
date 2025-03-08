// src/routes/taskRoutes.ts
import express from 'express';
import { createTask, updateTask, deleteTask, markTaskAsCompleted, getTasks } from '../controllers/taskController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validateCreateTask, handleValidationErrors } from '../middleware/validators'
const router = express.Router();


// RF-04: Criar Tarefa
router.post('/', authMiddleware, validateCreateTask, handleValidationErrors, createTask);

// RF-05: Editar Tarefa
router.put('/:id', authMiddleware, updateTask);

// RF-06: Excluir Tarefa
router.delete('/:id', authMiddleware, deleteTask);

// RF-07: Marcar Tarefa como Concluída
router.patch('/:id/complete', authMiddleware, markTaskAsCompleted);

// RF-08: Visualizar Tarefas
router.get('/', authMiddleware, getTasks);

export default router;