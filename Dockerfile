FROM node:18-alpine as build

WORKDIR /app
COPY . .
RUN npm install


ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN npm run build
RUN ls dist

FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]%
