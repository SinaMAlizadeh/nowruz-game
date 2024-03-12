FROM node as builder

WORKDIR /app

COPY package.json .


COPY . .

RUN npm install

RUN npm run build

RUN ls dist

EXPOSE 80

CMD [ "npm", "run", "dev" ]
