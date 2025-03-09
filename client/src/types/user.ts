export interface User {
    id: string;
    nome: string;
    email: string;
    genero: string;
    idade: number;
  }
  
  export interface UserRegistrationData {
    nome: string;
    email: string;
    genero: string;
    idade: number;
    senha: string;
  }