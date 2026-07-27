#!/bin/bash
set -e

# Enable Corepack with user directory
export COREPACK_HOME="$HOME/.corepack"
mkdir -p "$COREPACK_HOME"

# Use yarn directly without enabling corepack globally
yarn install
yarn build
