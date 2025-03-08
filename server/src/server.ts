import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes'; // Importa as rotas de autenticação
import taskRoutes from './routes/taskRoutes'; // Importa as rotas de tarefas
/*    Configura um servidor Express básico.

Habilita CORS e o uso de JSON nas requisições.

Define uma rota raiz (/) que retorna uma mensagem.

Inicia o servidor na porta definida no .env ou na porta 5000. */

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Conecta ao MongoDB
connectDB(); 


app.use(express.json());

// Rotas de autenticação
app.use('/api/auth', authRoutes);

// Rotas de tarefas
app.use('/api/tasks', taskRoutes); // Adicione as rotas de tarefas

app.use(cors());


app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});