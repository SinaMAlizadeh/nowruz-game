FROM node as builder

WORKDIR /app

COPY package.json .


COPY . .

RUN npm install

RUN npm run build

RUN ls dist


FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD [ "npm", "run", "dev" ]
