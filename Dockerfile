FROM node:10.9.0 as builder

# RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli

COPY . .

RUN npm run build

COPY . /usr/src/app

# CMD ng serve --host 0.0.0.0 --port 4200 

##stage2:
FROM nginx

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html