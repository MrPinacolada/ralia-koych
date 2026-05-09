# syntax=docker/dockerfile:1.7

# ============================================================
# 1. Dependencies stage — install with pnpm
# ============================================================
FROM node:22-alpine AS deps
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.2.0 --activate

# Copy lockfile + manifest first for better layer caching
COPY package.json pnpm-lock.yaml* ./

# Install all deps (incl. dev — needed for build)
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile || pnpm install


# ============================================================
# 2. Build stage — produce .output for production
# ============================================================
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.2.0 --activate

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NUXT_TELEMETRY_DISABLED=1

RUN pnpm run build


# ============================================================
# 3. Runtime stage — minimal Node Alpine, only .output
# ============================================================
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV NUXT_TELEMETRY_DISABLED=1
ENV HOST=0.0.0.0
ENV PORT=3000

# Non-root user for safety
RUN addgroup -S nuxt && adduser -S nuxt -G nuxt

COPY --from=builder --chown=nuxt:nuxt /app/.output ./.output

USER nuxt

EXPOSE 3000

# Healthcheck — Nuxt server should answer on /
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["node", ".output/server/index.mjs"]
