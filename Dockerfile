# Usar a imagem oficial do Node.js como base
FROM node:18-alpine

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos do projeto para o container
COPY package.json package-lock.json ./
RUN npm install

# Copiar o restante do código do backend
COPY . .

# Expor a porta onde o Parse Server rodará
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["npm", "start"]
