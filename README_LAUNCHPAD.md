# LaunchPad - E-Commerce & Blog Platform

## 📌 Quick Summary

**LaunchPad** is a full-stack web application that combines:
- **Strapi CMS** (backend) for managing products and blog articles
- **Next.js** (frontend) for displaying content beautifully
- **PostgreSQL** database for storing data
- **Multi-language support** (English & French)
- **SEO optimization** with automatic OG tags for social sharing

---

## 🎯 What Does It Do?

### For Admins
- Create and manage products with images, descriptions, and pricing
- Write and publish blog articles with rich text editing
- Control content visibility (draft/publish workflow)
- Manage global settings (navbar, footer, SEO)

### For Users
- Browse products on a beautiful website
- Read blog articles
- Share content on social media (with rich previews)
- Switch between English and French
- See optimized pages for search engines

---

## 🏗️ How It Works

### Architecture
```
Strapi Backend (API)  ←→  Next.js Frontend (Website)
       ↓                          ↓
   PostgreSQL                  Browser
   Database                     (User)
```

### Data Flow
1. **Admin** creates content in Strapi
2. **Content** is saved to database
3. **User** visits website
4. **Next.js** fetches content from Strapi API
5. **Page** is rendered with OG tags
6. **Browser** displays beautiful page

### Blog Page Example
```
User clicks "Blog"
    ↓
Next.js requests articles from Strapi
    ↓
Strapi returns article data
    ↓
Next.js generates HTML with OG tags
    ↓
Browser displays blog page
    ↓
User can share link on social media
    ↓
Social media shows rich preview (thanks to OG tags)
```

---

## ✅ System Status

### ✅ Everything Works
- [x] Strapi API responding correctly
- [x] Next.js frontend loading
- [x] Blog page fetching articles
- [x] Products page fetching products
- [x] OG tags generating (6 tags per page)
- [x] Images loading correctly
- [x] Multi-language support working
- [x] No API errors
- [x] No communication issues

### ✅ No Issues Found
Your application is **fully functional** and ready to deploy!

---

## 📁 Project Structure

```
LaunchPad/
├── strapi/                    # Backend (Strapi CMS)
│   ├── src/api/              # API endpoints
│   │   ├── product/          # Products
│   │   ├── article/          # Blog articles
│   │   └── global/           # Global settings
│   ├── config/               # Configuration
│   │   ├── database.ts       # Database config
│   │   └── server.ts         # Server config
│   ├── .env.production       # Production config
│   └── package.json
│
├── next/                      # Frontend (Next.js)
│   ├── app/                  # Pages & routes
│   │   ├── [locale]/         # Localized routes
│   │   │   ├── blog/         # Blog pages
│   │   │   ├── products/     # Product pages
│   │   │   └── layout.tsx    # Layout with OG tags
│   ├── lib/                  # Utilities
│   │   ├── shared/metadata.ts # OG tag generation
│   │   └── strapi/           # Strapi API client
│   ├── components/           # React components
│   ├── .env.production       # Production config
│   └── package.json
│
├── APPLICATION_OVERVIEW.md   # How the app works
├── DEPLOYMENT.md             # How to deploy
├── generate-secrets.js       # Secret generator
└── package.json              # Workspace config
```

---

## 🔄 Key Endpoints

### Strapi API (Backend)
```
GET /api/global              → Global data (navbar, footer, SEO)
GET /api/products            → All products
GET /api/products?filters... → Single product
GET /api/articles            → All blog articles
GET /api/articles?filters... → Single article
```

### Next.js Routes (Frontend)
```
/en                    → English homepage
/en/products           → Product listing
/en/products/[slug]    → Single product
/en/blog               → Blog listing
/en/blog/[slug]        → Single blog post
/fr                    → French homepage
/fr/blog               → French blog
```

---

## 🔐 SEO & OG Tags

### What Are OG Tags?
When you share a link on social media, OG (Open Graph) tags tell the platform what to show:
- Page title
- Description
- Image
- Content type

### Example
```
Share blog article on Facebook
    ↓
Facebook reads OG tags
    ↓
Shows preview with:
  • Article title
  • Article description
  • Article image
  • LaunchPad branding
    ↓
Users see rich preview
    ↓
More likely to click
```

### Generated Tags
- `og:title` - Page title
- `og:description` - Page description
- `og:image` - Image for preview
- `og:image:width` - Image width (1200px)
- `og:image:height` - Image height (630px)
- `og:image:alt` - Image alt text

---

## 🚀 Deployment

### Current Status
- ✅ Local development working
- ✅ Production configs created
- ✅ Security secrets generated
- ⏳ Ready to deploy to cloud

### How to Deploy

**See `DEPLOYMENT.md` for step-by-step instructions**

Quick steps:
1. Deploy Strapi to Render (10 minutes)
2. Deploy Next.js to Vercel (5 minutes)
3. Verify everything works (5 minutes)

**Total time: ~20 minutes**

---

## 🛠️ Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Backend | Strapi | 5.50.0 |
| Frontend | Next.js | 16.1.1 |
| UI Library | React | 19 |
| Styling | Tailwind CSS | Latest |
| Database | PostgreSQL | 15 |
| Hosting | Render + Vercel | Cloud |

---

## 📊 Content Management

### Products
- Title, description, images
- Price, SKU, inventory
- Related products
- SEO metadata

### Blog Articles
- Title, slug, content
- Featured image
- Author, publish date
- SEO metadata
- Related articles

### Global Settings
- Navbar configuration
- Footer configuration
- Global SEO settings
- Brand information

---

## 🔍 How to Check If It Works

### Check Backend
```bash
curl http://localhost:1337/api/global
# Should return JSON with global data
```

### Check Frontend
```
Visit http://localhost:3000/en
# Should load homepage
```

### Check Blog
```
Visit http://localhost:3000/en/blog
# Should show articles
```

### Check OG Tags
```
Right-click page → View Page Source
Search for "og:title"
Should find 6 OG tags
```

---

## 📝 Files to Know

| File | Purpose |
|------|---------|
| `APPLICATION_OVERVIEW.md` | Detailed explanation of how the app works |
| `DEPLOYMENT.md` | Step-by-step deployment instructions |
| `strapi/.env.production` | Strapi production configuration |
| `next/.env.production` | Next.js production configuration |
| `generate-secrets.js` | Generate secure secrets |

---

## ❓ Common Questions

### Q: How does the frontend get data?
**A:** Next.js makes API requests to Strapi using `fetch()`. The data is returned as JSON and rendered into HTML.

### Q: How are OG tags generated?
**A:** The `generateMetadataObject()` function in `next/lib/shared/metadata.ts` creates OG tags from Strapi SEO data.

### Q: Why do we need OG tags?
**A:** When users share links on social media, OG tags control what preview is shown, making it more likely people will click.

### Q: How does localization work?
**A:** Routes include `[locale]` parameter. Next.js fetches content for the specific locale from Strapi.

### Q: What happens when I publish an article?
**A:** The article status changes to "published" in Strapi. Next.js fetches only published articles, so it appears on the website.

### Q: Can I edit content without redeploying?
**A:** Yes! Content is in the database. Just edit in Strapi admin panel and it appears immediately on the website.

---

## 🎓 Learning Resources

- **Strapi Docs**: https://docs.strapi.io
- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com

---

## 📞 Support

### If Something Breaks
1. Check `APPLICATION_OVERVIEW.md` for how it works
2. Check browser console (F12) for errors
3. Check Strapi logs for API errors
4. Check Vercel/Render logs for deployment errors

### Common Issues

| Issue | Solution |
|-------|----------|
| API errors | Check Strapi is running |
| Pages not loading | Check Next.js is running |
| Images not showing | Check Strapi image URLs |
| OG tags missing | Check metadata generation |

---

## 🎉 Summary

**LaunchPad is a complete, working e-commerce and blogging platform:**

✅ Backend (Strapi) - Manages content  
✅ Frontend (Next.js) - Displays content  
✅ Database (PostgreSQL) - Stores data  
✅ SEO (OG tags) - Optimized for sharing  
✅ Localization (EN/FR) - Multi-language  
✅ No issues - Everything works!  

**Next step**: Deploy to Render and Vercel using `DEPLOYMENT.md`

---

**Created**: July 27, 2026  
**Status**: ✅ Production Ready  
**Last Updated**: Ready for Deployment
