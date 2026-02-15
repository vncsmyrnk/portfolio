# My portfolio

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
<br>
![CI/CD workflow](https://github.com/vncsmyrnk/portfolio/actions/workflows/ci-cd.yml/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

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

This project uses [just](https://github.com/casey/just) running development tasks.

```bash
just build-dev-env run-dev-env # Builds and runs the dev container
just dev-run # Runs the app (must be run inside the container)
```

The local environment should be available at http://localhost:3000.
