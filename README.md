# Night & Day Medical — Marketing Website

## Quick Deploy to Vercel

### Step 1: Create GitHub Repo
```bash
cd ndm-marketing
git init
git add .
git commit -m "NDM marketing site - initial deploy"
```
Push to GitHub as `dumplings561-lgtm/ndm-marketing`

### Step 2: Deploy on Vercel
1. Go to vercel.com → New Project → Import `ndm-marketing` repo
2. Framework Preset: **Next.js** (auto-detected)
3. Add Environment Variable:
   - Key: `RESEND_API_KEY`
   - Value: `re_jDod4tsq_6tHmHod2bZhockbenMetD599`
4. Click Deploy

### Step 3: Connect Custom Domain
1. In Vercel project → Settings → Domains
2. Add `nightdaymed.net`
3. In GoDaddy DNS, update:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
4. Wait for SSL to provision (usually ~5 min)

### Step 4: Verify Resend Domain (if not already done)
The Resend API key is already configured for nightdaymed.net domain.
Contact form sends FROM `noreply@nightdaymed.net` TO `anthony@nightdaymed.net`.

## File Structure
```
ndm-marketing/
├── pages/
│   ├── index.js          # Full marketing site (React/Next.js)
│   ├── _app.js           # App wrapper
│   ├── _document.js      # HTML document
│   └── api/
│       └── contact.js    # Resend API route for contact form
├── package.json
├── next.config.js
├── vercel.json
├── .gitignore
└── preview.html          # Static preview (not deployed)
```

## Features
- Pricing toggle: $99 Initial Consultation / $299 Complete Evaluation
- Contact form → Resend API → anthony@nightdaymed.net
- Click-to-call: (561) 427-9635
- Stripe payment links for both tiers
- Mobile responsive
- Compliance-safe (no compound names, no telehealth refs, proper disclaimers)
- Clinical advisor positioning throughout
- "Night & Day" branding in hero and CTA

## Stripe Links
- $99 Initial: https://buy.stripe.com/aFa8wQc4Z8aX0BzbQj8bS01
- $299 Complete: https://buy.stripe.com/cNi6oId9376T5VTdYr8bS00
