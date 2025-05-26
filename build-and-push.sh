#!/bin/bash

# Build and push script for Robin's Portfolio
# Make sure you're logged in to Docker Hub: docker login

echo "🚀 Building and pushing Robin's Portfolio Docker images..."

# Build production image
echo "📦 Building production image..."
docker-compose --profile prod build

# Build development image  
echo "📦 Building development image..."
docker-compose --profile dev build

# Push production image
echo "🚢 Pushing production image to Docker Hub..."
docker push robinttw/portfolio:latest

# Push development image
echo "🚢 Pushing development image to Docker Hub..."
docker push robinttw/portfolio:dev

echo "✅ All images pushed successfully!"
echo ""
echo "🎉 Users can now run:"
echo "   Production: docker run -p 80:80 robinttw/portfolio:latest"
echo "   Development: docker run -p 3000:3000 robinttw/portfolio:dev"
echo ""
echo "Or using docker-compose:"
echo "   Production: docker-compose --profile prod up"
echo "   Development: docker-compose --profile dev up" 