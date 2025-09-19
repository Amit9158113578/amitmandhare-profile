# syntax=docker/dockerfile:1

# 1) Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies using lockfile for reproducible builds
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# 2) Runtime stage using Nginx to serve static files
FROM nginx:1.27-alpine AS runner

<<<<<<< HEAD
# Copy compiled app
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the existing Nginx configuration file
COPY amitm.conf /etc/nginx/conf.d/

# Expose ports
EXPOSE 80 443
=======
# Copy custom Nginx config (SPA routing + caching)
#COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled app
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port and run
EXPOSE 80
>>>>>>> 8ccab4683c2b162a3b12dd973fc7b553de1b88de
CMD ["nginx", "-g", "daemon off;"]
