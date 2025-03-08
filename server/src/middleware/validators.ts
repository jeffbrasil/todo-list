// src/middleware/validators.ts
import { body, validationResult } from 'express-validator';

// Validações para o registro de usuário
export const validateRegisterUser = [
  body('name').notEmpty().withMessage('O nome é obrigatório'),
  body('email').isEmail().withMessage('E-mail inválido'),
  body('password').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
  body('genero').notEmpty().withMessage('O gênero é obrigatório'),
  body('idade').isInt({ min: 1 }).withMessage('A idade deve ser um número positivo'),
];

// Validações para o login de usuário
export const validateLoginUser = [
  body('email').isEmail().withMessage('E-mail inválido'),
  body('password').notEmpty().withMessage('A senha é obrigatória'),
];

// Validações para a criação de tarefas
export const validateCreateTask = [
  body('title').notEmpty().withMessage('O título é obrigatório'),
  body('dueDate').isISO8601().withMessage('A data deve estar no formato ISO8601 (ex: 2023-10-15T23:59:59.000Z)'),
];

// Middleware para tratar erros de validação
export const handleValidationErrors = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};