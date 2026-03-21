#!/bin/bash
# Run the dev server with arm64 Node (fixes "Bad CPU type" on Apple Silicon)
DIR="$(cd "$(dirname "$0")" && pwd)"
export PATH="$HOME/.nvm/versions/node/v20.20.1/bin:$DIR/node_modules/.bin:$PATH"
cd "$DIR"
./node_modules/.bin/next dev
