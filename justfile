default:
  just --list

path := "{{source_directory()}}/app"

build-dev-env:
  docker build -t portfolio-dev .

run-dev-env:
  docker run --rm -it \
    -v "$(pwd)":/opt/portfolio \
    -p 3000:3000 \
    -u 1000:1000 \
    --workdir /opt/portfolio \
    portfolio-dev bash

install:
  cd "{{source_directory()}}/app" && pnpm install

lint:
  cd "{{source_directory()}}/app" && pnpm run lint

dev-run: install lint
  cd "{{source_directory()}}/app" && pnpm run dev

build: install lint
  cd "{{source_directory()}}/app" && pnpm run build
