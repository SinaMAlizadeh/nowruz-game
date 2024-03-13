FROM node as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN ls dist

EXPOSE 80

CMD [ "npm", "run", "dev" ]
