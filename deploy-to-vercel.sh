#!/bin/bash

# NEMO Blog Deployment Script

echo "=== NEMO Blog Deployment to Vercel ==="
echo "Starting deployment process..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Login if needed (will open browser)
echo "If prompted, please log in to Vercel..."
vercel login --yes

# Deploy to production
echo "Deploying to production..."
cd /root/.openclaw/workspace/nemo-blog
vercel --prod --yes

echo "=== Deployment Complete ==="
