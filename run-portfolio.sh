#!/bin/bash

echo "🚀 Starting Robin's Portfolio..."
echo "📦 Pulling latest image from Docker Hub..."

# Pull and run the latest portfolio image
docker run -p 80:80 --name robins-portfolio robinttw/portfolio:latest

echo "🎉 Portfolio is running at http://localhost"
echo "Press Ctrl+C to stop" 