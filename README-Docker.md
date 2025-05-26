# 🐳 Docker Setup for Portfolio

This portfolio is fully dockerized for easy deployment and development. No need to worry about Node.js versions, npm installations, or dependency conflicts!

## 🚀 Quick Start (Production)

**Option 1: Pull from Docker Hub (Easiest!)**
```bash
# Just run the pre-built image - no cloning needed!
docker run -p 80:80 robinttw/portfolio:latest
```

**Option 2: Using Docker Compose with pre-built image**
```bash
# Clone the repository
git clone <your-repo-url>
cd Portfolio-v3

# Run in production mode (pulls from Docker Hub)
docker-compose --profile prod up
```

**Option 3: Build locally**
```bash
# Clone the repository
git clone <your-repo-url>
cd Portfolio-v3

# Build and run locally
docker-compose --profile prod up --build
```

Visit `http://localhost` in your browser!

## 🛠️ Development Mode

For development with hot reloading:

**Option 1: Pull from Docker Hub**
```bash
# Run pre-built development image
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules robinttw/portfolio:dev
```

**Option 2: Using Docker Compose**
```bash
# Run in development mode (pulls from Docker Hub)
docker-compose --profile dev up

# Or build locally
docker-compose --profile dev up --build
```

Visit `http://localhost:3000` in your browser. Changes to your code will automatically reload!

## 📦 Docker Hub Images

The portfolio is available as pre-built images on Docker Hub:

- **Production**: `robinttw/portfolio:latest` - Optimized for production with nginx
- **Development**: `robinttw/portfolio:dev` - Development server with hot reloading

### Quick Commands:
```bash
# Production (just run it!)
docker run -p 80:80 robinttw/portfolio:latest

# Development (with volume mounting for live editing)
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules robinttw/portfolio:dev

# Pull latest images
docker pull robinttw/portfolio:latest
docker pull robinttw/portfolio:dev
```

## 📋 Prerequisites

- Docker installed on your system
- Docker Compose (usually comes with Docker Desktop)

## 🔧 Available Commands

```bash
# Production build and run
docker-compose --profile prod up --build

# Development with hot reload
docker-compose --profile dev up --build

# Stop all services
docker-compose down

# Remove containers and images
docker-compose down --rmi all

# View logs
docker-compose logs -f
```

## 🌐 Port Configuration

- **Production**: `http://localhost:80` (or just `http://localhost`)
- **Development**: `http://localhost:3000`

## 📦 What's Included

- **Multi-stage Docker build** for optimized production images
- **Nginx** for serving static files with gzip compression
- **Hot reloading** in development mode
- **Automatic dependency management** - no need to run npm install
- **Cross-platform compatibility** - works on Windows, Mac, and Linux

## 🚨 Troubleshooting

**Port already in use?**
```bash
# Use different ports
docker run -p 8080:80 portfolio  # Production on port 8080
# or modify docker-compose.yml ports section
```

**Permission issues on Linux?**
```bash
sudo docker-compose --profile prod up --build
```

**Want to rebuild from scratch?**
```bash
docker-compose down --rmi all
docker-compose --profile prod up --build
```

## 🎯 Benefits

✅ **No Node.js installation required**  
✅ **No npm/yarn dependency conflicts**  
✅ **Consistent environment across all machines**  
✅ **Easy deployment to any Docker-compatible platform**  
✅ **Optimized production builds with nginx**  
✅ **Development hot reloading support**

---

*Just run one command and you're ready to go! 🎉* 