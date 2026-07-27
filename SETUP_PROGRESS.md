# 📋 Setup Progress Tracker

Track your progress as you complete each step.

---

## ✅ STEP 1: Create Render Account

### Tasks:
- [ ] Open https://render.com
- [ ] Click **Sign Up**
- [ ] Click **Continue with GitHub**
- [ ] Authorize Render to access GitHub
- [ ] Enter your name and email
- [ ] Click **Create Account**

### Status: ⏳ PENDING
**When done**: Come back and check this box, then move to Step 2

---

## ✅ STEP 2: Create PostgreSQL Database

### Tasks:
- [ ] Go to Render Dashboard
- [ ] Click **New +** → **PostgreSQL**
- [ ] Fill in database settings:
  - Name: `launchpad-db`
  - Database: `strapi`
  - User: `strapi`
  - Region: (choose closest to you)
  - PostgreSQL Version: 15
- [ ] Click **Create Database**
- [ ] Wait 2-3 minutes for green checkmark
- [ ] Find **Internal Database URL**
- [ ] **COPY and SAVE** the database URL

### Database URL (Save this!):
```
postgresql://strapi:XxLTkvGOMwu3hTU59WOS1oJzEWIADimn@dpg-d9jk5drrjlhs738l1t8g-a/strapi_i75z
```

### Status: ⏳ PENDING
**When done**: Come back and check this box, then move to Step 3

---

## ✅ STEP 3: Deploy Strapi Backend

### Tasks:
- [ ] Click **New +** → **Web Service**
- [ ] Select your GitHub repository: `Strapi_launchpad`
- [ ] Click **Connect**
- [ ] Fill in service settings:
  - Name: `launchpad-strapi`
  - Branch: `main`
  - Root Directory: `strapi`
  - Runtime: `Node`
  - Build Command: `yarn install && yarn build`
  - Start Command: `yarn start`
- [ ] Click **Create Web Service**
- [ ] Go to **Environment** tab
- [ ] Add these environment variables:

```
DATABASE_CLIENT=postgres
DATABASE_URL=postgresql://strapi:XxLTkvGOMwu3hTU59WOS1oJzEWIADimn@dpg-d9jk5drrjlhs738l1t8g-a/strapi_i75z
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
HOST=0.0.0.0
PORT=1337
APP_KEYS=90972f5830de3b9ac5ef6b5ad2838321,1c395dd5d7630aecf525b665e643fffd
API_TOKEN_SALT=60ce0c84488f5258df5e7a8a8e185c14
ADMIN_JWT_SECRET=e531b107d54c5592ebf9e8b423f862064440969d2231862554ad5954b07f3e0e
TRANSFER_TOKEN_SALT=bb7a20386abfc69e71f2f78a46d7b675
JWT_SECRET=b048547e8299cd06b29152ff5a9698c205cb405a38138949a13d38bdfcfb95c3
CLIENT_URL=https://launchpad.vercel.app
PREVIEW_SECRET=preview_secret
```

- [ ] Click **Save**
- [ ] Watch **Logs** tab for "Build successful"
- [ ] Wait for green status (5-10 minutes)
- [ ] **COPY and SAVE** your Strapi URL (top of page)
- [ ] Go to `https://[YOUR-STRAPI-URL]/admin`
- [ ] Create admin account:
  - Email: your email
  - Password: strong password
- [ ] Click **Let's start**

### Strapi URL (Save this!):
```
https://strapi-launchpad.onrender.com
```

### Status: ⏳ PENDING
**When done**: Come back and check this box, then move to Step 4

---

## ✅ STEP 4: Deploy Next.js Frontend

### Tasks:
- [ ] Go to https://vercel.com/dashboard
- [ ] Click **Add New** → **Project**
- [ ] Find your repository: `Strapi_launchpad`
- [ ] Click **Import**
- [ ] Set **Root Directory**: `next`
- [ ] Click **Continue**
- [ ] Add environment variables:

```
NEXT_PUBLIC_API_URL=https://strapi-launchpad.onrender.com
WEBSITE_URL=https://launchpad.vercel.app
PREVIEW_SECRET=preview_secret
```

(Replace `https://strapi-launchpad.onrender.com` with your actual Strapi URL from Step 3)

- [ ] Click **Deploy**
- [ ] Wait for deployment (3-5 minutes)
- [ ] **COPY and SAVE** your Vercel URL
- [ ] Go to **Settings** → **Environment Variables**
- [ ] Update `WEBSITE_URL` with your actual Vercel URL
- [ ] Go to **Deployments** → **Redeploy**
- [ ] Wait for redeployment to complete

### Vercel URL (Save this!):
```
strapi-launchpad-f4qc2jzz3-aadarshnithin-8336s-projects.vercel.app
```

### Status: ⏳ PENDING
**When done**: Come back and check this box, then move to Step 5

---

## ✅ STEP 5: Verify Everything Works

### Test Strapi Backend:
- [ ] Go to `https://strapi-launchpad.onrender.com/admin`
- [ ] Log in with your admin account
- [ ] See your products and articles
- [ ] Go to `https://strapi-launchpad.onrender.com/api/global`
- [ ] Should return JSON data

### Test Next.js Frontend:
- [ ] Go to `https://strapi-launchpad-f4qc2jzz3-aadarshnithin-8336s-projects.vercel.app`
- [ ] Homepage should load
- [ ] Click "Blog" - should show articles
- [ ] Click "Products" - should show products
- [ ] Images should load correctly

### Test OG Tags:
- [ ] Visit a blog post page
- [ ] Right-click → **View Page Source**
- [ ] Search for `og:title`
- [ ] Should find OG tags

### Test API Communication:
- [ ] Open browser console (F12)
- [ ] Go to **Network** tab
- [ ] Refresh page
- [ ] Look for requests to your Strapi URL
- [ ] Status should be 200 (success)

### Status: ⏳ PENDING
**When done**: Check this box - YOU'RE DONE! 🎉

---

## 📊 Summary

| Step | Task | Status |
|------|------|--------|
| 1 | Create Render Account | ⏳ |
| 2 | Create PostgreSQL Database | ⏳ |
| 3 | Deploy Strapi Backend | ⏳ |
| 4 | Deploy Next.js Frontend | ⏳ |
| 5 | Verify Everything | ⏳ |

---

## 💾 Important URLs & Credentials

### Database URL:
```
postgresql://strapi:XxLTkvGOMwu3hTU59WOS1oJzEWIADimn@dpg-d9jk5drrjlhs738l1t8g-a/strapi_i75z
```

### Strapi URL:
```
https://strapi-launchpad.onrender.com
```

### Vercel URL:
```
https://strapi-launchpad-f4qc2jzz3-aadarshnithin-8336s-projects.vercel.app
```

### Strapi Admin Email:
```
[SAVE HERE]
```

### Strapi Admin Password:
```
[SAVE HERE]
```

---

## 🆘 Need Help?

If something goes wrong:
1. Check the **Logs** tab in Render or Vercel
2. Read the error message carefully
3. Check ACCOUNT_SETUP.md troubleshooting section
4. Wait a few minutes and try again

---

**Good luck! You've got this! 🚀**
