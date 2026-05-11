# GymOS

Arabic-first gym management SaaS for the Egyptian market.

## Tech stack
- **API:** Fastify + TypeScript
- **Web:** Next.js + Tailwind (Arabic RTL)
- **Mobile:** React Native (iOS + Android) — future
- **Database:** PostgreSQL 16 + Redis 7
- **AI:** Claude API (Anthropic)
- **Hosting:** Hetzner VPS + Cloudflare

## Repo structure
gymos/
├── apps/
│   ├── api/        ← Fastify backend
│   └── web/        ← Next.js frontend
├── packages/
│   └── shared/     ← Shared TypeScript types
└── .github/
    └── workflows/  ← CI/CD pipelines

## Branch conventions
- main    — production. Never push directly.
- develop — integration. All features merge here first.
- feat/GYMOS-XXX-description — feature branches
- fix/GYMOS-XXX-description  — bug fix branches
- chore/description          — infra and config

## Commit format
feat(scope): GYMOS-XXX description
fix(scope): GYMOS-XXX description
chore(scope): description

## Team
- Marwan — Tech Lead, Backend, AI layer
- Mohamed — Backend, QA
- Mohamed — Frontend, RTL design system
