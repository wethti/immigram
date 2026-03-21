# Talentrelo — SEO Action Plan
**Generated:** 2026-03-20 | **Priority order:** Impact × Effort

---

## Phase 1 — Infrastructure (Do Today, ~45 min)

| # | Task | File | Impact |
|---|---|---|---|
| 1 | Create `robots.txt` with sitemap declaration + AI crawler policy | `/robots.txt` | 🔴 Critical |
| 2 | Create `sitemap.xml` with homepage, blog listing, and all 30 article URLs | `/sitemap.xml` | 🔴 Critical |
| 3 | Add OG + Twitter Card meta to `index.html` | `/index.html` | 🔴 Critical |
| 4 | Add OG + Twitter Card meta to `blog/index.html` | `/blog/index.html` | 🔴 Critical |
| 5 | Add `<link rel="canonical">` to `index.html` | `/index.html` | 🔴 Critical |
| 6 | Add `Organization` + `WebSite` + `Service` JSON-LD to `index.html` | `/index.html` | 🔴 Critical |
| 7 | Replace `FAQPage` schema injection with `BlogPosting` + `BreadcrumbList` in `blog/index.html` | `/blog/index.html` | 🔴 Critical |

## Phase 2 — Quick Wins (This Week, ~30 min)

| # | Task | File | Impact |
|---|---|---|---|
| 8 | Update copyright to 2026 in both footers | Both pages | ⚠️ Warning |
| 9 | Fix hero portrait: remove `loading="lazy"`, add `fetchpriority="high"` | `/index.html` | ⚠️ Warning |
| 10 | Add `<link rel="canonical">` dynamic update in blog JS per article | `/blog/index.html` | ⚠️ Warning |
| 11 | Fix ghost footer links: wire to real anchors or remove | `/index.html` | ⚠️ Warning |
| 12 | Update client avatar alt text from "Client" to descriptive text | `/index.html` | ⚠️ Warning |
| 13 | Add favicon SVG + apple-touch-icon | Both pages | ⚠️ Warning |

## Phase 3 — GEO / AI Search (Next Sprint)

| # | Task | File | Impact |
|---|---|---|---|
| 14 | Create `llms.txt` listing authoritative article URLs | `/llms.txt` | ⚠️ Warning |
| 15 | Add `BlogPosting` + `Person` schema dynamically in `renderArticle()` | `/blog/index.html` | ⚠️ Warning |
| 16 | Add static `<noscript>` fallback article list for non-JS crawlers | `/blog/index.html` | ⚠️ Warning |

## Phase 4 — E-E-A-T & Trust (Long-term)

| # | Task | Notes |
|---|---|---|
| 17 | Add Privacy Policy and Terms of Service pages | Required for Google trust signals; currently footer links go to `#` |
| 18 | Add physical address / contact information | Trust signal for YMYL-adjacent services |
| 19 | Add external press logos / "As seen in" section to homepage | Authoritativeness signal |
| 20 | Consider SSG build for blog (Astro, 11ty, Next.js) | Enables server-side OG tags per article, faster indexing, pre-rendered social previews |

---

## Expected Score After Phase 1+2

| Category | Before | After Est. |
|---|---|---|
| Technical SEO | 38 | 72 |
| Schema | 12 | 68 |
| On-Page SEO | 68 | 80 |
| GEO | 40 | 55 |
| **Total** | **49** | **~72** |
