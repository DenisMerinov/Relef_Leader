# Используем официальный образ Node.js в качестве базового образа
FROM node:16

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости проекта
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем приложение React
RUN npm run build

# Устанавливаем сервер для статических файлов (например, serve)
RUN npm install -g serve

# Открываем порт 80
EXPOSE 80

# Запускаем приложение при запуске контейнера
CMD ["serve", "-s", "build", "-l", "80"]