FROM node:14.17.6 as react-app-build
WORKDIR /react-app-build

COPY package*.json  ./
COPY tsconfig.json  ./
COPY craco.config.js ./
RUN npm ci
COPY src ./src
COPY public ./public
RUN npm run build

FROM nginx:1.21.3-alpine
COPY --from=react-app-build /react-app-build/build/ /usr/share/nginx/html
COPY  ./nginx/nginx.conf /etc/nginx/conf.d/default.conf