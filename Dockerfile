FROM node:20-alpine AS builder
RUN mkdir -p /app
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
ADD . .
RUN yarn build

FROM busybox
WORKDIR /app
COPY --from=builder app/dist/. ./
RUN echo "cp -r ./ /usr/share/nginx/html" > ./entrypoint.sh
RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["sh", "/entrypoint.sh"]
