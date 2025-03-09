import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { login, register, updateProfile } from '../services/authService';

interface AuthContextType {
  user: { id: string; nome: string; email: string } | null;
  token: string | null;
  login: (email: string, senha: string) => Promise<void>;
  register: (nome: string, email: string, genero: string, idade: number, senha: string) => Promise<void>;
  logout: () => void;
  updateUserProfile: (userId: string, updatedData: { nome?: string; email?: string; genero?: string; idade?: number }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ id: string; nome: string; email: string } | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  // Verifica se o usuário está autenticado ao carregar o contexto
  useEffect(() => {
    if (token) {
      // Aqui você pode adicionar uma chamada para buscar os dados do usuário
      // Exemplo: fetchUserData(token).then(setUser);
    }
  }, [token]);

  const handleLogin = async (email: string, senha: string) => {
    const response = await login({ email, senha });
    setUser({ id: response.userId, nome: response.nome, email: response.email });
    setToken(response.token);
    localStorage.setItem('token', response.token);
  };

  const handleRegister = async (nome: string, email: string, genero: string, idade: number, senha: string) => {
    const response = await register({ nome, email, genero, idade, senha });
    setUser({ id: response.userId, nome: response.nome, email: response.email });
    setToken(response.token);
    localStorage.setItem('token', response.token);
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  const handleUpdateProfile = async (userId: string, updatedData: { nome?: string; email?: string; genero?: string; idade?: number }) => {
    if (!token) return;
    const response = await updateProfile(userId, updatedData, token);
    setUser((prevUser) => (prevUser ? { ...prevUser, ...response } : null));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
        updateUserProfile: handleUpdateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};