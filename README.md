# SouthPride Sanctuary – Website

Premium residential plotted development website for **SouthPride Sanctuary**, Julkal, Shankarpally, West Hyderabad.

**TG RERA Registration:** P01100010026  
**Tagline:** The Art of Elevated Living

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond + Manrope (Google Fonts)

---

## Project Structure

```
app/
  layout.tsx          – Root layout with metadata & fonts
  page.tsx            – Main homepage (all sections)
  globals.css         – Global styles & Tailwind config
  api/enquiry/route.ts – Lead capture API endpoint
  sitemap.ts
  robots.ts

components/
  Navbar.tsx          – Sticky nav with mobile menu
  Hero.tsx            – Full-screen video hero
  ProjectIntro.tsx    – Project introduction section
  ProjectStats.tsx    – Animated statistics counter
  Highlights.tsx      – Project highlights grid
  Clubhouse.tsx       – Clubhouse & amenities
  MasterPlan.tsx      – Interactive master plan viewer
  Gallery.tsx         – Masonry gallery with lightbox
  Location.tsx        – Map & connectivity section
  Investment.tsx      – Why Shankarpally section
  Documents.tsx       – RERA & document downloads
  EnquirySection.tsx  – Lead enquiry form
  ContactSection.tsx  – Contact info section
  Footer.tsx          – Footer with links & disclaimer
  FloatingWhatsApp.tsx – Floating WhatsApp button

lib/
  project-data.ts     – All project info (single source of truth)
  contact-data.ts     – Contact numbers & WhatsApp links

public/
  images/
    hero/             – Hero video poster and background images
    master-plan/      – Master plan image (place actual file here)
  videos/
    sanctuary-hero.mp4  – Project video (upload here)
  documents/
    Sanctuary-E-Brochure.pdf
    Sanctuary-RERA-Certificate-P01100010026.pdf
    BPO1_010327_LO_HMDA_2691_SKP_2024.pdf
    Sanctuary_Julkal_Available_List_20112026.pdf
  logo/               – Project logo files
```

---

## Setup & Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create `.env.local` with:

```env
# Google Sheets lead capture webhook (from Google Apps Script)
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Add any other integrations below
```

---

## Important: Before Publishing

1. **Upload project assets** to `public/`:
   - `public/videos/sanctuary-hero.mp4` – Project video
   - `public/images/hero/hero-poster.jpg` – Hero fallback image
   - `public/images/hero/hero-bg.jpg` – Hero background image
   - `public/images/master-plan/sanctuary-layout.jpg` – Actual master plan
   - All PDF documents in `public/documents/`

2. **Update project data** in `lib/project-data.ts`:
   - Verify exact acreage
   - Confirm plot size range
   - Confirm possession date with project team
   - Verify Google Maps coordinates

3. **Configure lead capture** in `lib/contact-data.ts` and `.env.local`

4. **Set up Google Sheets** webhook or CRM integration

5. **Replace illustrative images** with actual project photographs

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set environment variables in Vercel Dashboard.

---

## Contact Numbers

- **Primary:** +91 8501878585
- **Secondary:** +91 9885858529

Both numbers support direct calls and WhatsApp.

---

## Legal Notes

- TG RERA Registration: **P01100010026**
- HMDA Reference: **010327/LO/HMDA/2691/SKP/2024** (Draft Layout Letter)
- All project claims should be verified with the project team before publication
- Do not publish guaranteed returns or unverified possession dates
