// src/models/Task.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interface para tipagem do documento
export interface ITask extends Document {
  title: string;
  description?: string;
  completed: boolean;
  userId: mongoose.Schema.Types.ObjectId; // Chave estrangeira para o usuário, o próprio moongose faz esse identificador, não sendo necessário declarar no modelo user
  dueDate: Date; // Data para conclusão da tarefa
}

// Schema da tarefa
const TaskSchema: Schema = new Schema({
  title: { type: String, required: true }, // Título é obrigatório
  description: { type: String }, // Descrição é opcional
  completed: { type: Boolean, default: false }, // Status padrão é false
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Referência ao modelo User
    required: true 
  }, // ID do usuário é obrigatório
  dueDate: { type: Date, required: true }, // Data para conclusão é obrigatória
}, { timestamps: true }); // Adiciona campos createdAt e updatedAt automaticamente

// Exporta o modelo
export default mongoose.model<ITask>('Task', TaskSchema);