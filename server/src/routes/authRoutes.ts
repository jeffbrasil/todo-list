import express from 'express';
import { registerUser, loginUser, updateUser } from '../controllers/authController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validateRegisterUser, validateLoginUser, handleValidationErrors } from '../middleware/validators';

const router = express.Router();

// Rota de registro de usuário
router.post('/register', validateRegisterUser, handleValidationErrors, registerUser);

// Rota de login do usuário
router.post('/login', validateLoginUser, handleValidationErrors, loginUser);

// Rota de atualização de perfil (protegida por autenticação)
router.put('/profile', authMiddleware, updateUser);

export default router;
