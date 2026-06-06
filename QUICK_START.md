# Quick Start - BWClient Financial CMS

## 🚀 Installation (2 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Create database & run migrations
npm run db:migrate

# 3. Start development server
npm run dev
```

Visit: **http://localhost:3000**

## 📝 Test Credentials

After running migrations, create an account:
- Go to http://localhost:3000/signup
- Create a new advisor account
- You'll have ADMIN access to all features including the Database Browser

## 🗄️ Database Browser

Once logged in as admin, click **🗄️ Database Browser** in the sidebar to:
- View all tables (Users, Clients, Portfolios, Documents, etc.)
- See record counts
- Browse table data in real-time
- No SQL knowledge needed!

## 📊 What You Can Do

### Create Clients
1. Click **👥 Clients**
2. Click **+ New Client**
3. Fill in client details
4. View in Database Browser instantly

### Track Everything
- **Portfolios** - Investment accounts
- **Documents** - Compliance & reports
- **Communications** - Call logs, emails
- **Transactions** - Buys, sells, dividends
- **Audit Log** - See all changes

## 🔐 Authentication

- SQLite database (no setup needed)
- JWT tokens
- Password hashing
- Protected routes

## 📁 Project Files

```
/src/app
  /dashboard
    /database      ← NEW: Database Browser
    /clients       ← Client management
    /portfolios    ← Portfolio tracking
    /documents     ← Document storage
    /audit         ← Compliance log
  /api
    /database      ← NEW: API for database stats
    /clients       ← Client CRUD
    /auth          ← Login/register
/prisma
  schema.prisma    ← Database structure
  dev.db          ← SQLite database (auto-created)
```

## 🎯 Next Steps

- [ ] Add portfolio visualization
- [ ] Implement file upload
- [ ] Create client reports
- [ ] Add email notifications
- [ ] Integrate with investment APIs

## 💾 Database

Uses **SQLite** for local development:
- No PostgreSQL installation needed
- Auto-created at `prisma/dev.db`
- Perfect for testing and demos
- Easy to switch to PostgreSQL later

---

**Happy coding!** 🚀
