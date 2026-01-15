#!/bin/sh
set -e

if [ -n "$VITE_API_URL" ]; then
    echo "Replacing API URL with $VITE_API_URL"
    # Recursively replace REPLACE_API_URL in /usr/share/nginx/html
    find /usr/share/nginx/html -type f -name "*.js" -exec sed -i "s|REPLACE_API_URL|$VITE_API_URL|g" {} +
fi

exec "$@"
