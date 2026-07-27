# Vercel Deployment Checklist

**Prerequisites**: 
- [ ] Strapi deployed to Render and running
- [ ] Strapi URL copied (e.g., `https://launchpad-strapi.onrender.com`)

## Step 1: Import Project to Vercel
- [ ] Go to https://vercel.com/dashboard
- [ ] Click **Add New** → **Project**
- [ ] Select your GitHub repository: `Strapi_launchpad`
- [ ] Click **Import**

## Step 2: Configure Project Settings
- [ ] **Framework Preset**: Next.js (should auto-detect)
- [ ] **Root Directory**: `next`
- [ ] **Build Command**: `yarn build` (should auto-detect)
- [ ] **Output Directory**: `.next` (should auto-detect)
- [ ] Click **Continue**

## Step 3: Add Environment Variables

Before deploying, add these environment variables in Vercel:

```
NEXT_PUBLIC_API_URL=https://[YOUR-STRAPI-URL]
WEBSITE_URL=https://[YOUR-VERCEL-URL].vercel.app
PREVIEW_SECRET=preview_secret
```

**Note**: Replace `[YOUR-STRAPI-URL]` with your Render Strapi URL from previous step

For `WEBSITE_URL`, you can use a placeholder initially:
```
WEBSITE_URL=https://launchpad.vercel.app
```

You'll update it after getting your actual Vercel URL.

## Step 4: Deploy
- [ ] Click **Deploy**
- [ ] Wait for deployment to complete (3-5 minutes)
- [ ] Watch the build logs
- [ ] Once complete, you'll get a URL like `https://launchpad-xxx.vercel.app`
- [ ] **SAVE THIS**: Copy your Vercel URL

## Step 5: Update Environment Variables with Actual URL
- [ ] Go to **Settings** → **Environment Variables**
- [ ] Update `WEBSITE_URL` with your actual Vercel URL
- [ ] Click **Save**
- [ ] Go to **Deployments** and click **Redeploy** on the latest deployment

## Step 6: Verify Deployment
- [ ] Visit your Vercel URL: `https://[YOUR-URL].vercel.app`
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Images load properly

## Step 7: Test All Pages
- [ ] Homepage: `/en` ✓
- [ ] Blog: `/en/blog` ✓
- [ ] Products: `/en/products` ✓
- [ ] French version: `/fr` ✓
- [ ] French blog: `/fr/blog` ✓

## Step 8: Verify OG Tags
- [ ] Visit a page on your Vercel site
- [ ] Right-click → **View Page Source**
- [ ] Search for `og:title` - should find it
- [ ] Search for `og:image` - should find it
- [ ] Search for `og:description` - should find it
- [ ] Verify image URL is absolute (includes domain)

## Step 9: Test API Connection
- [ ] Open browser console (F12)
- [ ] Check for any API errors
- [ ] Visit `/en/blog` - should load articles from Strapi
- [ ] Visit `/en/products` - should load products from Strapi

## Step 10: Configure Preview Mode (Optional)
If you want to use Next.js preview mode with Strapi draft content:

- [ ] Go to Strapi admin panel
- [ ] Settings → Preview
- [ ] Set preview URL to: `https://[YOUR-VERCEL-URL]/api/preview?secret=[PREVIEW_SECRET]`
- [ ] Save

## Troubleshooting

### Build fails
- [ ] Check **Logs** tab for error messages
- [ ] Verify root directory is set to `next`
- [ ] Ensure all dependencies are installed locally
- [ ] Try clearing cache: **Settings** → **Git** → **Redeploy**

### API errors on pages
- [ ] Verify `NEXT_PUBLIC_API_URL` is set correctly
- [ ] Check that Strapi is running and accessible
- [ ] Open browser console to see exact error
- [ ] Verify Strapi CORS settings if needed

### Images not loading
- [ ] Check image URLs in Strapi (should be absolute)
- [ ] Verify Strapi is accessible from Vercel
- [ ] Check browser console for 404 errors

### OG tags not showing
- [ ] Verify `WEBSITE_URL` is set correctly
- [ ] Check page source (not just preview)
- [ ] Wait for Vercel to rebuild after updating env vars
- [ ] Clear browser cache

### Pages showing 404
- [ ] Verify content is published in Strapi
- [ ] Check Strapi API is responding
- [ ] Review Vercel build logs for errors

## Performance Optimization (Optional)
- [ ] Enable Image Optimization in Vercel settings
- [ ] Set up analytics to monitor performance
- [ ] Configure caching headers if needed

## Domain Setup (Optional)
- [ ] Go to **Settings** → **Domains**
- [ ] Add your custom domain
- [ ] Update DNS records as instructed
- [ ] Enable HTTPS (automatic)

---

## ✅ Completion Checklist
- [ ] Project imported to Vercel
- [ ] Environment variables configured
- [ ] Deployment successful
- [ ] All pages loading
- [ ] OG tags present
- [ ] API connection working
- [ ] Images displaying correctly
- [ ] Ready for production use

---

## 🚀 Next Steps
1. Share your Vercel URL with team members
2. Test on different devices/browsers
3. Monitor Vercel analytics
4. Set up error tracking if needed
5. Plan for future updates

---

## 📊 Useful Links
- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Strapi Docs: https://docs.strapi.io
