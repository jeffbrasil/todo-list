# Usa uma imagem base do Node.js
FROM node:16

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código do projeto para o container
COPY . .

# Compila o código TypeScript
RUN npm run build

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]