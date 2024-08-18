FROM homebrew/ubuntu22.04
SHELL ["/bin/bash", "-c"]
RUN <<EOF
brew install pnpm just node
EOF
LABEL description=""
