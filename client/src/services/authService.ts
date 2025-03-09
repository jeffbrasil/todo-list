import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://seu-backend.fly.dev/api';

// Tipos para o cadastro de usuário
interface UserRegistrationData {
  nome: string;
  email: string;
  genero: string;
  idade: number;
  senha: string;
}

// Cadastro de usuário
export const register = async (userData: UserRegistrationData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Falha no cadastro');
  }
};

// Login (mantido igual, mas pode ser ajustado conforme necessário)
export const login = async (credentials: { email: string; senha: string }) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data; // Deve retornar o token JWT e dados do usuário
  } catch (error) {
    throw new Error('Credenciais inválidas');
  }
};

// Editar perfil (ajustado para incluir novos campos)
export const updateProfile = async (
  userId: string,
  updatedData: { nome?: string; email?: string; genero?: string; idade?: number },
  token: string
) => {
  try {
    const response = await axios.put(`${API_URL}/profile/${userId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Falha ao atualizar perfil');
  }
};