FROM node
WORKDIR /src
COPY . ./
RUN npm install -f &&  npm run clean && npm run build

FROM nginx:stable-alpine
COPY --from=0 /src/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
