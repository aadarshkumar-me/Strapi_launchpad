# LaunchPad Deployment Guide

This guide walks you through deploying your LaunchPad application to Render (backend) and Vercel (frontend).

## Prerequisites
- GitHub account with your code pushed (✓ Done)
- Render account (free at https://render.com)
- Vercel account (✓ Already have)

---

## Phase 2: Deploy Strapi Backend to Render

### Step 1: Create Render Account & Connect GitHub
1. Go to https://render.com
2. Sign up with GitHub (or email)
3. Authorize Render to access your GitHub repositories

### Step 2: Create PostgreSQL Database
1. In Render dashboard, click **New +** → **PostgreSQL**
2. Fill in:
   - **Name**: `launchpad-db`
   - **Database**: `strapi`
   - **User**: `strapi`
   - **Region**: Choose closest to you
   - **PostgreSQL Version**: 15
3. Click **Create Database**
4. Wait for database to be ready (2-3 minutes)
5. Copy the **Internal Database URL** (you'll need this)

### Step 3: Create Web Service for Strapi
1. Click **New +** → **Web Service**
2. Connect your GitHub repository
3. Fill in:
   - **Name**: `launchpad-strapi`
   - **Branch**: `main`
   - **Root Directory**: `strapi`
   - **Runtime**: `Node`
   - **Build Command**: `yarn install && yarn build`
   - **Start Command**: `yarn start`
4. Click **Create Web Service**

### Step 4: Add Environment Variables
In the Render dashboard for your Strapi service:

1. Go to **Environment** tab
2. Add these variables:

```
DATABASE_CLIENT=postgres
DATABASE_URL=[paste the Internal Database URL from step 2]
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
HOST=0.0.0.0
PORT=1337
APP_KEYS=key1,key2
API_TOKEN_SALT=your_salt
ADMIN_JWT_SECRET=your_secret
TRANSFER_TOKEN_SALT=your_salt
JWT_SECRET=your_secret
CLIENT_URL=https://[your-vercel-url].vercel.app
PREVIEW_SECRET=preview_secret
```

**Important**: Replace the placeholder values with secure random strings. You can generate them:
```bash
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

3. Click **Save**
4. Render will automatically redeploy

### Step 5: Wait for Deployment
- Watch the **Logs** tab for deployment progress
- Once deployed, you'll see a URL like `https://launchpad-strapi.onrender.com`
- **Copy this URL** - you'll need it for Next.js

### Step 6: Create Strapi Admin User
1. Go to your Strapi URL: `https://launchpad-strapi.onrender.com/admin`
2. Create a new admin account (first-time setup)
3. Log in and verify your content is there

---

## Phase 3: Deploy Next.js Frontend to Vercel

### Step 1: Connect Repository to Vercel
1. Go to https://vercel.com/dashboard
2. Click **Add New** → **Project**
3. Select your GitHub repository
4. Click **Import**

### Step 2: Configure Project Settings
1. **Framework Preset**: Next.js (should auto-detect)
2. **Root Directory**: `next`
3. Click **Continue**

### Step 3: Add Environment Variables
Before deploying, add these environment variables:

```
NEXT_PUBLIC_API_URL=https://launchpad-strapi.onrender.com
WEBSITE_URL=https://[your-vercel-url].vercel.app
PREVIEW_SECRET=preview_secret
```

**Note**: Replace `[your-vercel-url]` with your actual Vercel domain (you'll see it after first deploy)

### Step 4: Deploy
1. Click **Deploy**
2. Wait for deployment to complete (3-5 minutes)
3. You'll get a URL like `https://launchpad-xxx.vercel.app`

### Step 5: Update Environment Variables
1. Go back to Vercel project settings
2. Update `WEBSITE_URL` with your actual Vercel URL
3. Redeploy

### Step 6: Verify Deployment
1. Visit your Vercel URL
2. Check that pages load correctly
3. Verify OG tags are present (right-click → View Page Source, search for `og:`)

---

## Phase 4: Post-Deployment Verification

### Test Strapi API
```bash
curl https://launchpad-strapi.onrender.com/api/global
```

### Test Next.js Frontend
1. Visit your Vercel URL
2. Test these pages:
   - Homepage: `/en`
   - Blog: `/en/blog`
   - Products: `/en/products`

### Check OG Tags
1. Visit a page on your Vercel site
2. Right-click → **View Page Source**
3. Search for `og:title`, `og:image`, etc.

---

## Troubleshooting

### Strapi not starting on Render
- Check **Logs** tab for errors
- Verify DATABASE_URL is correct
- Ensure all required environment variables are set

### Next.js showing API errors
- Verify `NEXT_PUBLIC_API_URL` points to correct Strapi URL
- Check Strapi is running and accessible
- Wait a few minutes for DNS to propagate

### Images not loading
- Ensure Strapi image URLs are absolute (include domain)
- Check CORS settings in Strapi if needed

### OG tags not showing
- Verify `WEBSITE_URL` is set correctly in Next.js
- Check page source (not just preview)
- Wait for Vercel to rebuild

---

## Useful Links
- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- Strapi Deployment: https://docs.strapi.io/cms/deployment

## Support
If you encounter issues:
1. Check the **Logs** tab in Render/Vercel dashboard
2. Review error messages carefully
3. Verify all environment variables are set
4. Ensure GitHub repository is up to date
