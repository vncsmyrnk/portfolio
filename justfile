default:
  just --list

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
