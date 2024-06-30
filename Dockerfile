FROM node:18

WORKDIR /app

RUN npm install vite@0.20.2

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "dev" ]