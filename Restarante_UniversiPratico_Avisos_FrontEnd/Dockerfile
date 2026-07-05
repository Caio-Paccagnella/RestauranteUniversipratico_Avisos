# ==========================================
# Estágio 1: Instalação e Build (Node.js)
# ==========================================
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências primeiro (otimiza o cache do Docker)
COPY package.json package-lock.json* ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código do projeto
COPY . .

# Roda o comando de build do Expo para web
# O Expo exporta os arquivos finais, por padrão, para a pasta "dist"
RUN npx expo export

# ==========================================
# Estágio 2: Servidor Web (Nginx)
# ==========================================
FROM nginx:1.27-alpine

# Copia o seu arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia OS ARQUIVOS COMPILADOS do Estágio 1 (builder) para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]