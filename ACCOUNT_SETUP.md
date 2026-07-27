# Account Setup Guide - Step by Step

Complete account setup for Backend (Strapi), Database (PostgreSQL), and Frontend (Next.js).

---

## 📋 Overview

You need to set up 3 accounts:
1. **Render Account** (for Strapi backend + PostgreSQL database)
2. **Vercel Account** (for Next.js frontend) - ✅ You already have this

---

## 🔧 Step 1: Create Render Account (Backend + Database)

### 1.1 Go to Render Website
- Open browser
- Go to https://render.com
- Click **Sign Up**

### 1.2 Sign Up with GitHub
- Click **Continue with GitHub**
- Authorize Render to access your GitHub account
- Click **Authorize render-oss**

### 1.3 Complete Profile
- Enter your name
- Enter your email
- Click **Create Account**

### ✅ Result
You now have a Render account connected to GitHub!

---

## 🗄️ Step 2: Create PostgreSQL Database on Render

### 2.1 Go to Render Dashboard
- After login, you're on the Render dashboard
- Click **New +** button (top right)
- Select **PostgreSQL**

### 2.2 Configure Database
Fill in these fields:

| Field | Value |
|-------|-------|
| Name | `launchpad-db` |
| Database | `strapi` |
| User | `strapi` |
| Password | (auto-generated, keep it) |
| Region | (choose closest to you) |
| PostgreSQL Version | 15 |

### 2.3 Create Database
- Click **Create Database**
- Wait 2-3 minutes for database to be ready
- You'll see a green checkmark when ready

### 2.4 Copy Database URL
- On the database page, find **Internal Database URL**
- It looks like: `postgresql://strapi:password@host:5432/strapi`
- **Copy this URL** - you'll need it soon!

### ✅ Result
You now have a PostgreSQL database ready!

---

## 🚀 Step 3: Deploy Strapi Backend to Render

### 3.1 Create Web Service
- Click **New +** button again
- Select **Web Service**

### 3.2 Connect GitHub Repository
- Find your repository: `Strapi_launchpad`
- Click **Connect**
- Authorize if prompted

### 3.3 Configure Service
Fill in these fields:

| Field | Value |
|-------|-------|
| Name | `launchpad-strapi` |
| Branch | `main` |
| Root Directory | `strapi` |
| Runtime | `Node` |
| Build Command | `yarn install && yarn build` |
| Start Command | `yarn start` |

### 3.4 Create Service
- Click **Create Web Service**
- Render will start building your app

### 3.5 Add Environment Variables
While it's building, go to **Environment** tab and add:

```
DATABASE_CLIENT=postgres
DATABASE_URL=[PASTE YOUR DATABASE URL HERE]
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
HOST=0.0.0.0
PORT=1337
APP_KEYS=90972f5830de3b9ac5ef6b5ad2838321,1c395dd5d7630aecf525b665e643fffd
API_TOKEN_SALT=60ce0c84488f5258df5e7a8a8e185c14
ADMIN_JWT_SECRET=e531b107d54c5592ebf9e8b423f862064440969d2231862554ad5954b07f3e0e
TRANSFER_TOKEN_SALT=bb7a20386abfc69e71f2f78a46d7b675
JWT_SECRET=b048547e8299cd06b29152ff5a9698c205cb405a38138949a13d38bdfcfb95c3
CLIENT_URL=https://[YOUR-VERCEL-URL].vercel.app
PREVIEW_SECRET=preview_secret
```

**Note**: Leave `CLIENT_URL` as is for now, we'll update it after Vercel deployment.

### 3.6 Wait for Deployment
- Watch the **Logs** tab
- Wait for "Build successful" message
- Service will show green status when ready (5-10 minutes)

### 3.7 Get Your Strapi URL
- On the service page, find the URL at the top
- It looks like: `https://launchpad-strapi.onrender.com`
- **Copy this URL** - you'll need it for Next.js!

### 3.8 Create Strapi Admin User
- Go to `https://[YOUR-STRAPI-URL]/admin`
- You'll see the admin setup page
- Create your admin account:
  - Email: your email
  - Password: strong password
  - Click **Let's start**

### ✅ Result
You now have Strapi running in the cloud!

---

## 🌐 Step 4: Deploy Next.js Frontend to Vercel

### 4.1 Go to Vercel Dashboard
- Open browser
- Go to https://vercel.com/dashboard
- You should already be logged in

### 4.2 Import Project
- Click **Add New** → **Project**
- Find your repository: `Strapi_launchpad`
- Click **Import**

### 4.3 Configure Project
- **Framework Preset**: Next.js (should auto-detect)
- **Root Directory**: `next`
- Click **Continue**

### 4.4 Add Environment Variables
Before deploying, add these variables:

```
NEXT_PUBLIC_API_URL=https://[YOUR-STRAPI-URL]
WEBSITE_URL=https://launchpad.vercel.app
PREVIEW_SECRET=preview_secret
```

**Replace** `[YOUR-STRAPI-URL]` with your actual Strapi URL from Step 3.7

### 4.5 Deploy
- Click **Deploy**
- Wait for deployment to complete (3-5 minutes)
- You'll see a success message

### 4.6 Get Your Vercel URL
- After deployment, you'll see your URL
- It looks like: `https://launchpad-xxx.vercel.app`
- **Copy this URL**

### 4.7 Update Environment Variables
Now update the environment variables with your actual Vercel URL:

- Go to **Settings** → **Environment Variables**
- Update `WEBSITE_URL` to your actual Vercel URL
- Update `CLIENT_URL` in Render (go back to Render dashboard)
- Click **Save**

### 4.8 Redeploy Next.js
- Go to **Deployments**
- Click the three dots on the latest deployment
- Click **Redeploy**
- Wait for redeployment to complete

### ✅ Result
You now have Next.js running in the cloud!

---

## ✅ Verification Checklist

### Test Strapi Backend
- [ ] Go to `https://[YOUR-STRAPI-URL]/admin`
- [ ] Log in with your admin account
- [ ] See your products and articles
- [ ] Test API: `https://[YOUR-STRAPI-URL]/api/global`
- [ ] Should return JSON data

### Test Next.js Frontend
- [ ] Go to `https://[YOUR-VERCEL-URL]`
- [ ] Homepage should load
- [ ] Click "Blog" - should show articles
- [ ] Click "Products" - should show products
- [ ] Images should load correctly

### Test OG Tags
- [ ] Visit a blog post page
- [ ] Right-click → **View Page Source**
- [ ] Search for `og:title`
- [ ] Should find OG tags

### Test API Communication
- [ ] Open browser console (F12)
- [ ] Go to **Network** tab
- [ ] Refresh page
- [ ] Look for requests to your Strapi URL
- [ ] Status should be 200 (success)

---

## 📊 Summary of URLs

After setup, you'll have:

| Component | URL |
|-----------|-----|
| Strapi Admin | `https://launchpad-strapi.onrender.com/admin` |
| Strapi API | `https://launchpad-strapi.onrender.com/api` |
| Next.js Website | `https://launchpad-xxx.vercel.app` |

---

## 🆘 Troubleshooting

### Strapi won't start
- Check **Logs** tab in Render
- Verify DATABASE_URL is correct
- Verify all environment variables are set
- Wait a few minutes and check again

### Next.js shows API errors
- Verify `NEXT_PUBLIC_API_URL` is correct
- Check that Strapi is running
- Open browser console (F12) to see exact error
- Wait for Vercel to finish redeployment

### Images not loading
- Check Strapi is accessible
- Verify image URLs in Strapi are correct
- Check browser console for 404 errors

### OG tags not showing
- Verify `WEBSITE_URL` is set correctly
- Check page source (not just preview)
- Wait for Vercel to rebuild
- Clear browser cache

---

## 📝 Important Notes

1. **Save all URLs** - You'll need them later
2. **Save your admin password** - You'll need it to log in
3. **Don't share secrets** - Keep API keys private
4. **Check logs** - If something fails, check the logs first
5. **Wait for deployment** - Don't refresh too early

---

## 🎉 You're Done!

Once all 3 are set up and verified:
- ✅ Backend (Strapi) running on Render
- ✅ Database (PostgreSQL) on Render
- ✅ Frontend (Next.js) running on Vercel
- ✅ Everything communicating correctly

Your application is **LIVE** on the internet! 🚀

---

## 📞 Quick Reference

### Render Dashboard
https://dashboard.render.com

### Vercel Dashboard
https://vercel.com/dashboard

### Your Strapi Admin
https://[YOUR-STRAPI-URL]/admin

### Your Website
https://[YOUR-VERCEL-URL]

---

**Status**: Ready to deploy  
**Next Step**: Follow steps 1-4 above in order
