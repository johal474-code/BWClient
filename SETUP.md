# BWClient - Development Setup Guide

## Quick Start

### 1. Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### 2. Installation

```bash
npm install
```

### 3. Database Setup

```bash
# Copy environment file
cp .env.example .env.local

# Update .env.local with your PostgreSQL URL
# DATABASE_URL="postgresql://user:password@localhost:5432/bwclient"

# Run migrations
npm run db:migrate

# (Optional) Open Prisma Studio to view/edit data
npm run db:studio
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Features Implemented

### ✅ Phase 1: Client Management Core
- **Authentication**
  - User registration & login
  - JWT-based session management
  - Password hashing with bcryptjs
  - Protected routes

- **Client Management**
  - Create, read, update clients
  - Client profiles with comprehensive data
  - Client status tracking (PROSPECT, ACTIVE, INACTIVE, ARCHIVED)
  - Risk profile assessment

- **API Routes**
  - `/api/auth/register` - User registration
  - `/api/auth/login` - User login
  - `/api/auth/logout` - User logout
  - `/api/auth/me` - Get current user
  - `/api/clients` - Client CRUD operations
  - `/api/portfolios` - Portfolio management
  - `/api/documents` - Document management
  - `/api/communications` - Communication log
  - `/api/transactions` - Transaction tracking
  - `/api/audit-logs` - Audit trail

- **UI Pages**
  - Home page with marketing content
  - Login & Sign up pages
  - Dashboard overview
  - Clients list & create forms
  - Client detail view with tabbed interface
  - Audit log viewer

### 📋 Database Schema

Comprehensive Prisma schema includes:
- **Users** - Advisors and admin users with role-based access
- **Clients** - Full client profiles with financial data
- **Portfolios** - Investment portfolios (ISA, Pension, etc.)
- **Holdings** - Individual asset holdings
- **Transactions** - Buy/sell/dividend transactions
- **Documents** - Fact finds, reports, compliance docs
- **Communications** - Email, phone, meeting logs
- **AuditLogs** - Complete action tracking for compliance

## Project Structure

```
/src
  /app              # Next.js 14 App Router
    /api            # API routes
    /dashboard      # Protected dashboard pages
    /login          # Login page
    /signup         # Sign up page
    page.tsx        # Home page
    layout.tsx      # Root layout
  /components       # React components
    protected-layout.tsx    # Auth wrapper
    client-detail-view.tsx  # Client dashboard
    dashboard-navbar.tsx    # Navigation
  /lib              # Utilities
    prisma.ts       # Prisma client
    auth.ts         # JWT auth utilities
    types.ts        # TypeScript types
    context/
      auth-context.tsx # Auth state management
/prisma
  schema.prisma     # Database schema
```

## Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/bwclient
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Next Steps

### Phase 2 - Enhanced Features
- [ ] Portfolio analytics dashboard
- [ ] Document upload & storage (S3)
- [ ] Client communication portal
- [ ] Advanced reporting
- [ ] Compliance checklists
- [ ] Email notifications

### Phase 3 - Advanced
- [ ] Multi-user team management
- [ ] Client self-service portal
- [ ] API webhooks
- [ ] Data export (CSV, PDF)
- [ ] Advanced analytics
- [ ] Integration with investment platforms

## FCA Compliance Notes

The system is built with UK FCA regulations in mind:
- ✅ Complete audit trails for all actions
- ✅ Role-based access control (SUPER_ADMIN, ADMIN, ADVISOR, VIEWER)
- ✅ Client consent tracking
- ✅ Document retention policies
- ✅ User session management
- ✅ Data encryption ready (add encryption layer as needed)

## API Examples

### Register User
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"advisor@firm.com","password":"secure","name":"John Advisor"}'
```

### Create Client
```bash
curl -X POST http://localhost:3000/api/clients \
  -H "Content-Type: application/json" \
  -b "authToken=jwt_token" \
  -d '{"firstName":"Jane","lastName":"Smith","email":"jane@example.com","riskProfile":"MODERATE"}'
```

## Support & Contributing

For issues or feature requests, please create a GitHub issue.

---

**Built with Next.js 14, TypeScript, Tailwind CSS, and Prisma ORM** 🚀
