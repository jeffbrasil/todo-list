// src/models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interface para tipagem do documento
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  genero: string;
  idade: string;
}

// Schema do usuário
const UserSchema: Schema = new Schema({
  name: { type: String, required: true }, // Nome é obrigatório
  email: { type: String, required: true, unique: true }, // E-mail é obrigatório e único Talvez eu a use de PK
  genero: {type: String, required: true}, // Genero
  idade: {type: String, required: true}, // Idade
  password: { type: String, required: true }, // Senha é obrigatória
}, { timestamps: true }); // Adiciona campos createdAt(Informa data e hora de quando uma conta foi criada) e updatedAt(Informa data e hora de quando teve uma att) automaticamente

// Exporta o modelo
export default mongoose.model<IUser>('User', UserSchema);