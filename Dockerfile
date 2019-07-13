# FROM node:10.9.0

# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

# RUN npm install -g @angular/cli

# COPY . /usr/src/app

# CMD ng serve --host 0.0.0.0 --port 4200

FROM nginx:stable
COPY ./dist/ /var/www
# COPY ./certificates/ /var/certificates
COPY ./nginx.conf /etc/nginx/conf.d/default.conf