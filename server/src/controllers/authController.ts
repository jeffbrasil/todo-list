//Este módulo conterá a lógica para registrar, autenticar e editar usuários.

// src/controllers/authController.ts
import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// RF-01: Cadastro de Perfil
 export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, genero, idade } = req.body;

  try {
    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ error: 'E-mail já cadastrado' });
      return
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o usuário
    const user = await User.create({ name, email, password: hashedPassword, genero, idade });

    // Retorna o usuário criado (sem a senha)
    res.status(201).json({ id: user._id, email: user.email });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};

// RF-02: Entrar no Perfil
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Verifica se o usuário existe
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado' });
      return
    }

    // Verifica a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ error: 'Senha inválida' });
      return
    }

    // Gera o token JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    // Retorna o token e os dados do usuário (sem a senha)
    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
};

// RF-03: Editar Perfil
export const updateUser = async (req: Request, res: Response) => {
  const { name, password, genero, idade } = req.body;
  const userId = (req as any).userId; // Obtido do middleware de autenticação

  try {
    const updates: any = {};
    if (name) updates.name = name;
    if (password) updates.password = await bcrypt.hash(password, 10);
    if (genero) updates.genero = genero;
    if (idade) updates.idade = idade;

    // Atualiza o usuário
    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

    // Retorna o usuário atualizado (sem a senha)
    res.json({ id: updatedUser?._id, email: updatedUser?.email });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar perfil' });
  }
};