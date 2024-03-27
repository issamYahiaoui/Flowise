# Build local monorepo image
# docker build --no-cache -t  flowise .

# Run image
# docker run -d -p 3000:3000 flowise

FROM node:18-alpine
RUN apk add --update libc6-compat python3 make g++
# needed for pdfjs-dist
RUN apk add --no-cache build-base cairo-dev pango-dev

# Install Chromium
RUN apk add --no-cache chromium

#install PNPM globaly
RUN npm install -g pnpm

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser


ENV VITE_CLERK_PUBLISHABLE_KEY=${VITE_CLERK_PUBLISHABLE_KEY}
ENV VITE_CLERK_SECRET_KEY=${VITE_CLERK_SECRET_KEY}
ENV VITE_FLOWISE_USERNAME=${VITE_FLOWISE_USERNAME}
ENV VITE_FLOWISE_PASSWORD=${VITE_FLOWISE_PASSWORD}

ENV FLOWISE_USERNAME=${FLOWISE_USERNAME}
ENV FLOWISE_PASSWORD=${FLOWISE_PASSWORD}



WORKDIR /usr/src

# Copy app source
COPY . .

RUN pnpm install

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]
