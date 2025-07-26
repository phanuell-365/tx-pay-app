#FROM ubuntu:latest
FROM debian
LABEL authors="phanuel"

ENTRYPOINT ["top", "-b"]

# Dockerfile
#FROM node:18-alpine AS builder
FROM node:22-bookworm

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
#FROM nginx:alpine

# Copy built assets
#COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
#COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]