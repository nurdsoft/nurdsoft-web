FROM node:18
WORKDIR /src
COPY . ./
RUN npm install -f 
RUN npm run build

FROM nginx
COPY --from=0 /src/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
