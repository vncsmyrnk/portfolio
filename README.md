# My portfolio

All my skills and accomplishments showcased in one place

## Run locally

```bash
git clone git@github.com:vncsmyrnk/portfolio.git
cd portifolio
docker run --rm -it -v "$(pwd)"/app:/var/app -p 3000:3000 --workdir /var/app node:21-alpine sh
npm i
npm run start
```
