# My portfolio

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
<br>
![CI](https://github.com/vncsmyrnk/portfolio/actions/workflows/ci.yml/badge.svg)
![Release](https://github.com/vncsmyrnk/portfolio/actions/workflows/release.yml/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

All my skills and accomplishments showcased in one place.

[Check it out!](https://vncsmyrnk.github.io/portfolio/)

## Run with docker

```bash
git clone git@github.com:vncsmyrnk/portfolio.git
cd portifolio
docker run --rm -it -v "$(pwd)"/app:/var/app -p 3000:3000 --workdir /var/app node:21-slim bash
```

```bash
# Inside container
apt update && apt install -y wget
wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
source ~/.bashrc
pnpm install
pnpm run dev
```
