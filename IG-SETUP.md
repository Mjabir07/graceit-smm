# Instagram Setup & Optimization — Grace IT Solutions

**Do this once, top to bottom.** I can't log into your IG account — so every field below is copy-paste ready. Assets are in `brand/ig/` and `posts/`.
**Date:** 14 August 2026

---

## STEP 0 — Convert to a Business account (required)
Settings → **Account type and tools → Switch to professional account → Business** → category **"Information Technology Company"**.
Why: unlocks Insights, contact buttons, ads, and the "Message/WhatsApp" action button. Personal accounts can't run ads or see analytics.

---

## STEP 1 — Profile picture
Upload **`brand/ig/profile.png`**. It's centered/circle-safe (IG crops to a circle — the logo + "IT SOLUTIONS · SHARJAH" sits dead center).

---

## STEP 2 — Name & Username (SEO — this is how people find you in search)

- **Username (@handle):** `graceitsolutions` (if taken: `graceit.ae` or `graceit.uae`)
- **Name field (the bold line — NOT the @handle):**
  `Grace IT Solutions | CCTV & IT Support Sharjah`
  > IG search indexes the **Name** field. Putting "CCTV" + "IT Support" + "Sharjah" here makes you findable — the @handle alone won't.

Keep the same @handle on Facebook + LinkedIn for consistency.

---

## STEP 3 — Bio (paste exactly — fits the 150-char limit)

```
🛡️ Sharjah Police-Approved CCTV & IT Partner
💻 IT Support • AMC • Networks • Repairs
📍 Sharjah & Northern Emirates
👇 Free site survey
```

- **Category (shown under name):** `Information Technology Company`
- **Pronouns:** skip.

---

## STEP 4 — Link (the one clickable link)
Until the website domain is renewed, point it straight to WhatsApp:
- **Link:** `https://wa.me/971558908651`
- After the site is live, switch to a **link-in-bio** (free: Linktree / your site) with: Website · WhatsApp · Services · Free Survey · Google Maps.

---

## STEP 5 — Contact options + Action button
Edit Profile → **Contact options**:
- **Business phone:** +971 55 890 8651  (call + text)
- **Business email:** info@graceitme.com
- **Business address:** Al Dhaid Road, near Sharjah International Airport, Sharjah (use the SAME wording everywhere — fix the SAIF Zone vs Al Dhaid mismatch).
- **Action button:** add **WhatsApp** (or "Book Now" → link `https://wa.me/971558908651`). This is the money button — buyers tap it to chat.

---

## STEP 6 — Story Highlights (5 covers ready in `brand/ig/`)
Create these 5 highlights in this order. Upload the matching cover, name it exactly:

| Order | Highlight name | Cover file | What goes inside |
|---|---|---|---|
| 1 | **CCTV** | `brand/ig/cover-cctv.png` | Approved-CCTV posts, install clips, compliance |
| 2 | **IT & AMC** | `brand/ig/cover-it.png` | AMC plans, IT support posts, tips |
| 3 | **Network** | `brand/ig/cover-network.png` | Cabling before/after, office setups |
| 4 | **Reviews** | `brand/ig/cover-reviews.png` | Screenshots of Google/client reviews |
| 5 | **Offers** | `brand/ig/cover-offers.png` | Free survey, bundles, promos |
| 6 | **Contact** | `brand/ig/cover-contact.png` | Location, hours, WhatsApp, how to book |

> Tip: post something to your Story first, then "Add to Highlight" — a highlight needs at least one story in it. Set the cover from the highlight's Edit screen.

---

## STEP 7 — First 9 posts (the grid people judge you by)
Post these before promoting the page — an empty grid kills trust. Use the graphics already generated:

| # | File | Topic |
|---|---|---|
| 1 | `posts/01-intro.png` | Who we are / intro |
| 2 | `posts/SAMPLE-cctv-premium.png` | Is your CCTV compliant? (hero) |
| 3 | `posts/07-amc.png` | What an IT AMC gets you |
| 4 | `posts/04-pc-signs.png` | 3 signs your PC is dying |
| 5 | `posts/17-survey.png` | Free site survey offer |
| 6 | `posts/05-footage.png` | 30-day footage rule |
| 7 | `posts/20-approved-vs.png` | Approved vs unapproved |
| 8 | `posts/15-backup.png` | 3-2-1 backup rule |
| 9 | `posts/30-recap.png` | Services recap |

Captions for each = `CONTENT-BANK.md` (numbers match). Paste the finalised CTA block from `POSTS-READY.md`.

---

## STEP 8 — Settings to switch on
- **Insights:** auto-on with Business account — check weekly (profile visits, reach, link taps).
- **Message controls:** allow message requests; set a **quick reply / greeting** ("Hi 👋 thanks for messaging Grace IT — which do you need: CCTV, IT support, cabling or repair, and which area?").
- **Saved replies:** create 3–4 (pricing, free survey booking, location/hours).
- **Auto-linked accounts:** connect IG ↔ Facebook Page in **Meta Business Suite** → post once, publish both, and unlock ads later.
- **Two-factor auth:** turn ON (protect the account).

---

## STEP 9 — First-week checklist
- [ ] Business account + category set
- [ ] Profile pic uploaded (`brand/ig/profile.png`)
- [ ] Name field = "Grace IT Solutions | CCTV & IT Support Sharjah"
- [ ] Bio + link (`wa.me/971558908651`)
- [ ] WhatsApp action button + contact info
- [ ] 6 highlights created with covers
- [ ] First 9 posts published
- [ ] Follow 20–30 local businesses / suppliers / partners to seed reach
- [ ] Linked to Facebook Page via Meta Business Suite
- [ ] Ask 10 past customers to follow + leave a Google review

---

## Ongoing rhythm (from `SOCIAL-MEDIA-PLAYBOOK.md`)
3–4 posts/week + 3–5 stories/week. Batch weekly. Turn **every real job** into a post (install photo/video). Report **profile→WhatsApp taps + DM enquiries**, not likes.

---

## Assets index
- Profile picture → `brand/ig/profile.png`
- Highlight covers → `brand/ig/cover-*.png` (6)
- Ready post graphics → `posts/*.png` (12 + premium sample)
- Captions → `CONTENT-BANK.md` · Contacts/prompts → `POSTS-READY.md`

*Regenerate any asset: `node scripts/gen-ig.mjs` (profile + covers) or `node scripts/gen-posts.mjs` (post cards). Uses pre-installed Chromium, no installs.*
