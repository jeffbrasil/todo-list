// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
    return
  }

  try {
    // Verifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };

    // Adiciona o ID do usuário à requisição
    (req as any).userId = decoded.userId;

    // Permite o acesso à rota
    next();
  } catch (error) {
    res.status(400).json({ error: 'Token inválido' });
  }
};