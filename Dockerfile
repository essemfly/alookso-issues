FROM node:lts-alpine AS base
RUN npm install -g pnpm

FROM base AS dependencies
ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN pnpm install

RUN chown -R node:node /app
USER node

FROM base AS build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npx prisma generate
RUN pnpm build
# RUN pnpm build

FROM base AS deploy
WORKDIR /app
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
RUN pnpm install

CMD ["pnpm", "start"]


