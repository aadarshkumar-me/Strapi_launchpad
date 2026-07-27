# 🚀 Quick Start: Deploy LaunchPad

Your application is ready to deploy! Follow these simple steps.

---

## 📋 What You Need

1. **Render Account** (free at https://render.com)
2. **Vercel Account** (✅ you already have this)
3. **GitHub Repository** (✅ already pushed)
4. **5-10 minutes** per platform

---

## 🔐 Your Generated Secrets

These are unique to your deployment. **Keep them safe!**

```
APP_KEYS=90972f5830de3b9ac5ef6b5ad2838321,1c395dd5d7630aecf525b665e643fffd
API_TOKEN_SALT=60ce0c84488f5258df5e7a8a8e185c14
ADMIN_JWT_SECRET=e531b107d54c5592ebf9e8b423f862064440969d2231862554ad5954b07f3e0e
TRANSFER_TOKEN_SALT=bb7a20386abfc69e71f2f78a46d7b675
JWT_SECRET=b048547e8299cd06b29152ff5a9698c205cb405a38138949a13d38bdfcfb95c3
```

---

## 🎯 Deployment in 3 Steps

### Step 1: Deploy Strapi to Render (10 minutes)

1. Go to https://render.com and sign up with GitHub
2. Create PostgreSQL database (copy the URL)
3. Create Web Service:
   - Repository: `Strapi_launchpad`
   - Root Directory: `strapi`
   - Build: `yarn install && yarn build`
   - Start: `yarn start`
4. Add environment variables (see `RENDER_SETUP_CHECKLIST.md`)
5. Deploy and wait for success
6. Create admin user at `/admin`
7. **Copy your Strapi URL** (e.g., `https://launchpad-strapi.onrender.com`)

### Step 2: Deploy Next.js to Vercel (5 minutes)

1. Go to https://vercel.com/dashboard
2. Click **Add New** → **Project**
3. Select `Strapi_launchpad` repository
4. Set Root Directory: `next`
5. Add environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://[YOUR-STRAPI-URL]
   WEBSITE_URL=https://[YOUR-VERCEL-URL].vercel.app
   PREVIEW_SECRET=preview_secret
   ```
6. Deploy
7. **Copy your Vercel URL** (e.g., `https://launchpad-xxx.vercel.app`)

### Step 3: Update & Verify (2 minutes)

1. Go back to Vercel settings
2. Update `WEBSITE_URL` with your actual Vercel URL
3. Redeploy
4. Test your site at the Vercel URL
5. Check OG tags (right-click → View Source, search for `og:`)

---

## 📚 Detailed Guides

For step-by-step instructions with screenshots:

- **Render Backend**: See `RENDER_SETUP_CHECKLIST.md`
- **Vercel Frontend**: See `VERCEL_SETUP_CHECKLIST.md`
- **Full Deployment Guide**: See `DEPLOYMENT_GUIDE.md`

---

## ✅ Verification Checklist

After deployment, verify everything works:

- [ ] Strapi admin panel loads
- [ ] Strapi API responds (`/api/global`)
- [ ] Next.js homepage loads
- [ ] Blog page loads with articles
- [ ] Products page loads with products
- [ ] OG tags present in page source
- [ ] Images loading correctly
- [ ] No console errors

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Database won't connect | Check DATABASE_URL is correct, wait a few minutes |
| Strapi won't start | Check logs, verify all env vars are set |
| Next.js shows API errors | Verify NEXT_PUBLIC_API_URL points to Strapi |
| Images not loading | Check Strapi is accessible, verify image URLs |
| OG tags missing | Verify WEBSITE_URL is set, wait for rebuild |

For more help, see `DEPLOYMENT_GUIDE.md` troubleshooting section.

---

## 📞 Support Resources

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Strapi Docs**: https://docs.strapi.io
- **Next.js Docs**: https://nextjs.org/docs

---

## 🎉 You're Done!

Once both are deployed and verified, your application is live!

**Share your Vercel URL** with anyone who wants to see your site.

---

## 📝 Files in This Repository

```
LaunchPad/
├── QUICK_START_DEPLOYMENT.md      ← You are here
├── DEPLOYMENT_GUIDE.md             ← Detailed instructions
├── DEPLOYMENT_STATUS.md            ← Current status
├── RENDER_SETUP_CHECKLIST.md       ← Render step-by-step
├── VERCEL_SETUP_CHECKLIST.md       ← Vercel step-by-step
├── generate-secrets.js             ← Secret generator script
├── strapi/
│   ├── .env.production             ← Production config
│   └── ...
├── next/
│   ├── .env.production             ← Production config
│   └── ...
└── ...
```

---

**Ready? Start with Step 1 above!** 🚀
