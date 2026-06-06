# BWClient - Financial Advisory Client Management System

A modern CMS for UK-based financial advice firms to manage client relationships, portfolios, and advisory records.

## Features

### Core (Phase 1 - Client Management)
- ✅ Client Profiles & Demographics
- ✅ Portfolio Management
- ✅ Document Management
- ✅ Client Communication Log
- ✅ Compliance & Audit Trail

### Planned (Phase 2+)
- Content Management (Advice Articles)
- Reporting & Analytics
- Client Portal
- Automated Compliance Checks (FCA Ready)

## Tech Stack

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes + Prisma ORM
- **Database**: PostgreSQL
- **Auth**: NextAuth.js (JWT-based)
- **Deployment**: Vercel / Self-hosted

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Run database migrations
npx prisma migrate dev

# Start dev server
npm run dev
```

## Project Structure

```
/app           - Next.js app directory (pages & layouts)
/components    - Reusable React components
/lib           - Utilities, API helpers, database config
/prisma        - Database schema & migrations
/public        - Static assets
/styles        - Global styles
```

## Compliance Notes

This system is built with UK FCA regulations in mind:
- Full audit trails for all client interactions
- Document retention policies
- Client data privacy (GDPR compliant)
- Segregation of duties via role-based access

---

**Vibe Coding**: We'll iterate fast, focusing on client management first. Features will evolve based on actual needs.
