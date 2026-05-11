FROM node:26-alpine AS build
WORKDIR /var/app/

RUN npm install -g corepack@0.34.7
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM nginx:alpine
COPY --from=build /var/app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
EXPOSE 80
