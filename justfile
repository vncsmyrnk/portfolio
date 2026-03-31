default:
  just --list

build-dev-env:
  docker build -t portfolio-dev .dev

run-dev-env:
  docker run --rm -it \
    -v "$(pwd)":/opt/portfolio \
    -p 3000:3000 \
    -u 1000:1000 \
    --workdir /opt/portfolio \
    portfolio-dev bash

install:
  pnpm install

lint:
  pnpm run lint

run: install lint
  pnpm run dev

build: install lint
  pnpm run build

deploy-to-koyeb:
  @./deploy-to-koyeb.sh
