FROM node as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN ls dist


FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]%
