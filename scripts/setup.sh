#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ ! -d "$SCRIPT_DIR/node_modules" ]; then
  echo "Installing sketch plugin dependencies..."
  cd "$SCRIPT_DIR"
  npm install --production
  echo "Done."
else
  echo "Dependencies already installed."
fi
