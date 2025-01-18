# # Step 1: Use a lightweight base image with Nginx
# FROM nginx:stable-alpine

# # Step 2: Copy the dist files to the Nginx default static file directory
# COPY dist/ /usr/share/nginx/html

# # Step 3: Expose the default Nginx HTTP port
# EXPOSE 80

# # Step 4: Start Nginx when the container starts
# CMD ["nginx", "-g", "daemon off;"]

FROM node:23-alpine3.20

RUN apk add --update npm

WORKDIR /admin

COPY . .

# RUN rm -rf node_modules && npm i && npm run build
RUN rm -rf node_modules && npm i

EXPOSE 5174

CMD npm run dev
# CMD npm run preview
