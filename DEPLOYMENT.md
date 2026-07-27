# Deployment Guide

## Your Generated Secrets

```
APP_KEYS=90972f5830de3b9ac5ef6b5ad2838321,1c395dd5d7630aecf525b665e643fffd
API_TOKEN_SALT=60ce0c84488f5258df5e7a8a8e185c14
ADMIN_JWT_SECRET=e531b107d54c5592ebf9e8b423f862064440969d2231862554ad5954b07f3e0e
TRANSFER_TOKEN_SALT=bb7a20386abfc69e71f2f78a46d7b675
JWT_SECRET=b048547e8299cd06b29152ff5a9698c205cb405a38138949a13d38bdfcfb95c3
```

---

## Deploy Strapi to Render

### 1. Create Render Account
- Go to https://render.com
- Sign up with GitHub

### 2. Create PostgreSQL Database
- Click **New +** → **PostgreSQL**
- Name: `launchpad-db`
- Database: `strapi`
- User: `strapi`
- Click **Create Database**
- **Copy the Internal Database URL**

### 3. Create Web Service
- Click **New +** → **Web Service**
- Select your GitHub repository
- **Name**: `launchpad-strapi`
- **Root Directory**: `strapi`
- **Build Command**: `yarn install && yarn build`
- **Start Command**: `yarn start`
- Click **Create Web Service**

### 4. Add Environment Variables
In Render dashboard, go to **Environment** and add:

```
DATABASE_CLIENT=postgres
DATABASE_URL=[PASTE DATABASE URL HERE]
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

### 5. Deploy & Create Admin User
- Wait for deployment to complete
- Go to `https://[YOUR-STRAPI-URL]/admin`
- Create admin account
- **Copy your Strapi URL**

---

## Deploy Next.js to Vercel

### 1. Import Project
- Go to https://vercel.com/dashboard
- Click **Add New** → **Project**
- Select your GitHub repository
- Click **Import**

### 2. Configure
- **Root Directory**: `next`
- Click **Continue**

### 3. Add Environment Variables
```
NEXT_PUBLIC_API_URL=https://[YOUR-STRAPI-URL]
WEBSITE_URL=https://[YOUR-VERCEL-URL].vercel.app
PREVIEW_SECRET=preview_secret
```

### 4. Deploy
- Click **Deploy**
- Wait for completion
- **Copy your Vercel URL**

### 5. Update & Redeploy
- Go to **Settings** → **Environment Variables**
- Update `WEBSITE_URL` with your actual Vercel URL
- Go to **Deployments** → **Redeploy**

---

## Verify Everything Works

### Test Strapi
- Visit `https://[YOUR-STRAPI-URL]/api/global`
- Should return JSON

### Test Next.js
- Visit `https://[YOUR-VERCEL-URL]`
- Homepage should load
- Visit `/blog` - should show articles
- Visit `/products` - should show products

### Check OG Tags
- Right-click page → **View Page Source**
- Search for `og:title`
- Should find OG tags

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Database won't connect | Check DATABASE_URL is correct |
| Strapi won't start | Check logs, verify env vars |
| Next.js shows API errors | Verify NEXT_PUBLIC_API_URL |
| Images not loading | Check Strapi is accessible |
| OG tags missing | Verify WEBSITE_URL is set |

---

## Done!

Your application is now live! 🎉

- **Backend**: `https://[YOUR-STRAPI-URL]`
- **Frontend**: `https://[YOUR-VERCEL-URL]`
