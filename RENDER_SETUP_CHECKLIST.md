# Render Deployment Checklist

## Step 1: Create Render Account
- [ ] Go to https://render.com
- [ ] Sign up with GitHub
- [ ] Authorize Render to access your repositories

## Step 2: Create PostgreSQL Database
- [ ] Click **New +** → **PostgreSQL**
- [ ] **Name**: `launchpad-db`
- [ ] **Database**: `strapi`
- [ ] **User**: `strapi`
- [ ] **Region**: Select closest to you
- [ ] **PostgreSQL Version**: 15
- [ ] Click **Create Database**
- [ ] Wait for database to be ready (2-3 minutes)
- [ ] **SAVE THIS**: Copy the **Internal Database URL** (starts with `postgresql://`)

## Step 3: Create Web Service for Strapi
- [ ] Click **New +** → **Web Service**
- [ ] Select your GitHub repository: `Strapi_launchpad`
- [ ] **Name**: `launchpad-strapi`
- [ ] **Branch**: `main`
- [ ] **Root Directory**: `strapi`
- [ ] **Runtime**: `Node`
- [ ] **Build Command**: `yarn install && yarn build`
- [ ] **Start Command**: `yarn start`
- [ ] Click **Create Web Service**

## Step 4: Add Environment Variables to Render Service

In the Render dashboard for your Strapi service, go to **Environment** tab and add these variables:

### Database Configuration
```
DATABASE_CLIENT=postgres
DATABASE_URL=[PASTE YOUR INTERNAL DATABASE URL HERE]
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

### Security Secrets (Generated)
```
APP_KEYS=90972f5830de3b9ac5ef6b5ad2838321,1c395dd5d7630aecf525b665e643fffd
API_TOKEN_SALT=60ce0c84488f5258df5e7a8a8e185c14
ADMIN_JWT_SECRET=e531b107d54c5592ebf9e8b423f862064440969d2231862554ad5954b07f3e0e
TRANSFER_TOKEN_SALT=bb7a20386abfc69e71f2f78a46d7b675
JWT_SECRET=b048547e8299cd06b29152ff5a9698c205cb405a38138949a13d38bdfcfb95c3
```

### Application Configuration
```
HOST=0.0.0.0
PORT=1337
CLIENT_URL=https://[YOUR-VERCEL-URL].vercel.app
PREVIEW_SECRET=preview_secret
```

**Note**: You'll update `CLIENT_URL` after deploying to Vercel (you'll get the URL after Vercel deployment)

## Step 5: Deploy and Monitor
- [ ] Click **Save** in Render
- [ ] Render will automatically start deployment
- [ ] Watch the **Logs** tab for deployment progress
- [ ] Wait for "Build successful" message
- [ ] **SAVE THIS**: Copy your Strapi URL (looks like `https://launchpad-strapi.onrender.com`)

## Step 6: Create Strapi Admin User
- [ ] Go to `https://[YOUR-STRAPI-URL]/admin`
- [ ] Create a new admin account (first-time setup)
- [ ] Log in and verify your content is there
- [ ] Check that all products and articles are visible

## Step 7: Test Strapi API
- [ ] Open in browser: `https://[YOUR-STRAPI-URL]/api/global`
- [ ] You should see JSON data
- [ ] Check that products endpoint works: `https://[YOUR-STRAPI-URL]/api/products`

## Step 8: Update Next.js Environment Variables
Once you have your Strapi URL from Step 5:

In your local `.env.production` (already created):
```
NEXT_PUBLIC_API_URL=https://[YOUR-STRAPI-URL]
WEBSITE_URL=https://[YOUR-VERCEL-URL].vercel.app
PREVIEW_SECRET=preview_secret
```

Then commit and push to GitHub:
```bash
git add next/.env.production
git commit -m "Update Next.js API URL for production"
git push origin main
```

## Troubleshooting

### Database connection fails
- [ ] Check DATABASE_URL is correct (copy-paste from Render)
- [ ] Verify DATABASE_SSL is set to `true`
- [ ] Wait a few minutes for database to fully initialize

### Strapi won't start
- [ ] Check **Logs** tab for error messages
- [ ] Verify all required environment variables are set
- [ ] Ensure build command completed successfully

### Admin panel won't load
- [ ] Clear browser cache
- [ ] Try incognito/private window
- [ ] Check that Strapi service is running (green status in Render)

### API returns 502 Bad Gateway
- [ ] Service may still be deploying, wait a few minutes
- [ ] Check logs for errors
- [ ] Verify database is connected

---

## ✅ Completion Checklist
- [ ] PostgreSQL database created
- [ ] Web Service created
- [ ] All environment variables added
- [ ] Deployment successful
- [ ] Admin user created
- [ ] API endpoints responding
- [ ] Ready for Vercel deployment

---

## 🔐 Security Reminders
- ✅ These secrets are generated fresh for you
- ✅ Never commit `.env.production` to GitHub
- ✅ Store these secrets in a password manager
- ✅ Each deployment environment should have different secrets
- ✅ If secrets are exposed, regenerate them immediately
