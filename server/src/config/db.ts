import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Conecta ao MongoDB usando a URI do arquivo .env
    const conn = await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1); // Encerra o processo em caso de erro
  }
};

export default connectDB;