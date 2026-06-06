# Run BWClient on Your Network (192.168.1.241)

## Quick Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create Database
```bash
npm run db:migrate
```

### Step 3: Run on Your Network IP
```bash
npm run dev -- --host 0.0.0.0 --port 3000
```

Or use this simpler command:
```bash
NEXT_PUBLIC_API_URL=http://192.168.1.241:3000 npm run dev
```

## Access from Other Devices

### From Your Machine (192.168.1.241)
- **http://192.168.1.241:3000**
- **http://localhost:3000**

### From Another Device on the Network
- **http://192.168.1.241:3000**

Example: If you want to access from your phone or tablet on the same WiFi:
1. Find your machine's IP: `192.168.1.241`
2. Open browser on other device
3. Go to: `http://192.168.1.241:3000`

## Complete Command

Run this one command to start everything:

```bash
npm install && npm run db:migrate && npm run dev
```

Then access at: **http://192.168.1.241:3000**

## Troubleshooting

### Can't connect from another device?

1. **Check your firewall** - Allow port 3000
   - Windows: Open Windows Defender Firewall → Allow app through firewall
   - Mac/Linux: `sudo lsof -i :3000` to check if port is open

2. **Verify IP address** - Make sure you're using the right IP
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig | grep inet
   ```
   Look for something like `192.168.1.x`

3. **Same WiFi network?** - All devices must be on same network

4. **Can't see changes?** - Hard refresh browser: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)

## File Structure After Setup

```
BWClient/
├── .env.local              ← Configured for 192.168.1.241
├── prisma/
│   └── dev.db              ← SQLite database (auto-created)
├── node_modules/           ← Installed dependencies
├── src/                    ← Your application code
└── npm scripts
    ├── dev                 ← Starts server
    ├── build               ← Build for production
    └── db:migrate          ← Create database
```

## What's Running

- **Frontend**: React 18 + Next.js 14
- **Backend**: Next.js API routes
- **Database**: SQLite (file-based, no server needed)
- **Auth**: JWT tokens
- **Port**: 3000 (configurable)

## Login After Starting

1. Go to **http://192.168.1.241:3000**
2. Click **Sign Up**
3. Create advisor account
4. Login with your credentials
5. Access dashboard and database browser!

## Production IP Change

If your IP changes (routers often reassign), update `.env.local`:

```bash
NEXTAUTH_URL=http://YOUR_NEW_IP:3000
NEXT_PUBLIC_API_URL=http://YOUR_NEW_IP:3000
```

Then restart: `npm run dev`

---

**Quick reference:**
```bash
# Terminal 1: Start the app
npm run dev

# Then in browser:
# http://192.168.1.241:3000
```

That's it! 🚀
