# Step 1: Use a lightweight base image with Nginx
FROM nginx:stable-alpine

# Step 2: Copy the dist files to the Nginx default static file directory
COPY dist/ /usr/share/nginx/html

# Step 3: Expose the default Nginx HTTP port
EXPOSE 80

# Step 4: Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
