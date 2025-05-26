# Use Node.js 18 Alpine for smaller image size
FROM node:18-alpine as build

# Install build dependencies for native modules
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    autoconf \
    automake \
    libtool \
    nasm \
    libpng-dev \
    libjpeg-turbo-dev

# Set working directory
WORKDIR /app

# Copy package files and npm config first for better caching
COPY package*.json .npmrc ./

# Set environment variables to skip problematic binary downloads
ENV SKIP_SASS_BINARY_DOWNLOAD_FOR_CI=true
ENV SKIP_NODE_SASS_TESTS=true
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV OPTIPNG_BIN_SKIP_INSTALL=true
ENV GIFSICLE_BIN_SKIP_INSTALL=true
ENV PNGQUANT_BIN_SKIP_INSTALL=true

# Install dependencies using yarn with ignore-scripts to skip post-install compilation
RUN yarn install --ignore-scripts || yarn install --ignore-scripts --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage with nginx
FROM nginx:alpine

# Copy built app from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 