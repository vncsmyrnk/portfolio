![NodeJS](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fvncsmyrnk%2Fportfolio%2Fraw%2Frefs%2Fheads%2Fmain%2Fpackage.json&query=%24.engines.node&style=plastic&logo=node.js&label=nodejs&color=green)
![PNPM](https://img.shields.io/badge/dynamic/regex?url=https%3A%2F%2Fgithub.com%2Fvncsmyrnk%2Fportfolio%2Fraw%2Frefs%2Fheads%2Fmain%2Fpackage.json&search=%22packageManager%22%3A%20%22pnpm%5C%40(.*)%22&replace=v%241&style=plastic&logo=pnpm&label=pnpm&color=yellow)
![React](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fgithub.com%2Fvncsmyrnk%2Fportfolio%2Fraw%2Frefs%2Fheads%2Fmain%2Fpnpm-lock.yaml&query=%24.importers.'.'.dependencies.react.version&prefix=v&style=plastic&logo=react&label=react)
![TypeScript](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fgithub.com%2Fvncsmyrnk%2Fportfolio%2Fraw%2Frefs%2Fheads%2Fmain%2Fpnpm-lock.yaml&query=%24.importers.'.'.devDependencies.typescript.version&prefix=v&style=plastic&logo=typescript&label=typescript&color=blue)
![Vite](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fgithub.com%2Fvncsmyrnk%2Fportfolio%2Fraw%2Frefs%2Fheads%2Fmain%2Fpnpm-lock.yaml&query=%24.importers.'.'.devDependencies.vite.version&prefix=v&style=plastic&logo=vite&label=vite&color=7131d1)
<br>
![CI/CD workflow](https://github.com/vncsmyrnk/portfolio/actions/workflows/ci-cd.yml/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# My portfolio

All my skills and accomplishments showcased in one place.

[Check it out!](https://vncsmyrnk.dev)

## Service Architecture

```mermaid
graph TD
    subgraph "Cloudflare DNS"
        A[vncsmyrnk.dev<br/>Cached] --> B[Google Cloud Run];
        G[Cache Purge API] -.-> A;
    end

    subgraph "GitHub"
        C(CI/CD Workflow) --> |"deploys to"| B;
        C --> |"builds & pushes"| D[hub.docker.com<br/>vncsmyrnk/portfolio:latest];
        C --> |"also pushes to"| H[ghcr.io<br/>vncsmyrnk/portfolio:latest];
        C --> |"deploys to"| E[GitHub Pages];
        C --> |"purges cache"| G;
    end

    subgraph "Google Cloud"
        B --> |"pulls image"| D;
    end

    subgraph "Docker Registries"
        D;
        H;
    end

    F[Developer] --> |"pushes to main"| C;

    style A fill:#ff9800
    style D fill:#2196f3
    style H fill:#4caf50
    style B fill:#9c27b0
```

Check [the latest action runs](https://github.com/vncsmyrnk/portfolio/actions) for more information.

## Development

This project uses [just](https://github.com/casey/just) running development tasks.

```sh
just run
```

The local environment should be available at http://localhost:3000.
