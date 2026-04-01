FROM node:25-alpine AS build
WORKDIR /var/app/
# https://pnpm.io/installation#in-a-docker-container
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -
COPY . .
RUN source "$HOME/.shrc" && pnpm install --frozen-lockfile && pnpm run build

FROM nginx:alpine
COPY --from=build /var/app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
EXPOSE 80
