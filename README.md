![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
<br>
![CI](https://github.com/vncsmyrnk/portfolio/actions/workflows/ci.yml/badge.svg)
![Release](https://github.com/vncsmyrnk/portfolio/actions/workflows/release.yml/badge.svg)

# My portfolio

All my skills and accomplishments showcased in one place.

[Check it out!](https://vncsmyrnk.github.io/portfolio/)

## Run locally

```bash
git clone git@github.com:vncsmyrnk/portfolio.git
cd portifolio
docker run --rm -it -v "$(pwd)"/app:/var/app -p 3000:3000 --workdir /var/app node:21-alpine sh
npm i
npm run start
```
