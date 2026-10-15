# Implementation Plan: Talkyd Industrials Corporate Rebrand & SEO Migration

## Status: READY FOR IMPLEMENTATION

This plan documents the complete rebrand and SEO migration from Mbonyange Africa Limited to TALKYD INDUSTRIALS - SMC LTD. The project involves updating company identity, domain references, SEO metadata, and structured data across the Next.js website.

---

## Exploration Summary

**Current State Assessment:**
- ✅ Project: Next.js 16.4.0, React 19.2.3, TypeScript, Tailwind CSS
- ✅ Build system: Next.js (npm run build, npm run dev)
- ✅ Test framework: None configured (manual verification required)
- ✅ Package.json already updated to "talkyd-industrials-website"
- ✅ Primary domain: https://talkyd.com (confirmed in sitemap, robots, metadata)
- ✅ Company-transition page exists at /company-transition
- ⚠️ **CRITICAL GAP**: JSON-LD structured data for Organization schema is missing from layout.tsx
- ✅ No old references (mbonyange/chembridge) found in source files
- ✅ Contact form and email templates correctly reference Talkyd
- ✅ About page has correct mission, vision, and company history
- ✅ Footer has current company name and contact information

**Key Decisions:**
1. JSON-LD Schema will be added to root layout.tsx to ensure Google, Bing, and AI systems correctly interpret Talkyd as the current organization. This is critical for SEO and for AI search engines to distinguish between old (Mbonyange) and current (Talkyd) identity.
2. Company-transition page will be verified and linked from Footer "Company Information" section to ensure search engines and visitors understand the brand transition.
3. All verified talkyd.com references will be confirmed in place. No changes needed for working URLs.
4. The package-lock.json old reference (chembridge-africa-website) will be regenerated when dependencies are reinstalled—no manual change needed.

---

## Implementation Plan

### Phase 1: SEO & Structured Data (CRITICAL)

- [ ] 1. Add Organization JSON-LD schema to root layout.tsx
      Add structured data after the metadata export in `/src/app/layout.tsx` to declare official company identity for search engines and AI systems.
      Files: `/src/app/layout.tsx`
      Changes:
      - Import 'Metadata' type from 'next'
      - Add JSON-LD script tag in the <head> section via Head component or direct script injection
      - Schema includes: name (TALKYD INDUSTRIALS - SMC LTD), url (https://talkyd.com), logo (/images/talkyd-nav-logo.png), description (industrial chemical distribution focus), foundingDate (2018)
      - Do NOT include unverified contact details, phone numbers, or addresses
      - Do NOT add sameAs links unless official verified profiles are in the codebase
      Verify: `npm run build` completes without errors. Check Next.js build output shows no schema validation warnings.

### Phase 2: Company Transition Page Enhancement

- [ ] 2. Add company-transition link to Footer "Company Information" section
      Add a navigation link in the footer that helps visitors and search engines discover the transition page.
      Files: `/src/components/layout/Footer.tsx`
      Changes:
      - In the "Quick Links" section, add link: {name: 'Company Transition', href: '/company-transition'}
      - Alternatively, add a new "Company Information" section with transition page link
      - Position link logically (after About Us or at end of Quick Links)
      Verify: `npm run build` completes without errors. Check footer renders link to /company-transition.

- [ ] 3. Verify company-transition page metadata and content
      Ensure the company-transition page has correct metadata, H1 tag, and messaging.
      Files: `/src/app/company-transition/page.tsx` (no changes required if verified correct)
      Verification:
      - Page H1 reads: "From Mbonyange Africa to Talkyd Industrials"
      - Page includes statement: "Talkyd Industrials - SMC Ltd is the current business identity following transition from Mbonyange Africa"
      - Page has no claims about legal merger or acquisition (correctly states "business transition")
      - Page links to homepage, products, contact pages
      - Metadata title and description are present
      - Robots meta includes index: true, follow: true
      Verify: `npm run build` completes. Manually visit /company-transition and confirm: (1) H1 visible, (2) statement about transition present, (3) no merger claims, (4) links work, (5) page renders without console errors.

### Phase 3: SEO Configuration Verification

- [ ] 4. Verify sitemap.ts includes all current pages and uses talkyd.com URL
      Confirm sitemap is correctly configured and accessible.
      Files: `/src/app/sitemap.ts` (verify, no changes if correct)
      Verification items:
      - baseUrl set to 'https://talkyd.com' ✓
      - Pages array includes: '', '/about', '/departments', '/industries', '/products', '/safety', '/contact', '/company-transition' ✓
      - All URLs use https://talkyd.com prefix ✓
      - Sitemap changeFrequency and priority are set ✓
      Verify: `npm run build` completes. Manually check sitemap at https://localhost:3000/sitemap.xml (after dev server starts) shows all pages with talkyd.com URLs.

- [ ] 5. Verify robots.ts references talkyd.com/sitemap.xml
      Confirm robots.txt is correctly configured.
      Files: `/src/app/robots.ts` (verify, no changes if correct)
      Verification:
      - userAgent set to '*' ✓
      - allow set to '/' ✓
      - sitemap URL set to 'https://talkyd.com/sitemap.xml' ✓
      Verify: `npm run build` completes. Manually check robots at https://localhost:3000/robots.txt shows sitemap URL with talkyd.com.

- [ ] 6. Verify layout.tsx metadata includes talkyd.com and correct company description
      Confirm root metadata is correctly configured for search engines.
      Files: `/src/app/layout.tsx` (verify, no changes if correct)
      Verification items:
      - title template: "%s | Talkyd Industrials" ✓
      - description mentions "Talkyd Industrials" and "industrial chemical" ✓
      - keywords include "Talkyd" and industrial/chemical/Uganda terms ✓
      - openGraph.url: 'https://talkyd.com' ✓
      - openGraph.title and description use "Talkyd Industrials" ✓
      - twitter card configured ✓
      - metadataBase: new URL("https://talkyd.com") ✓
      Verify: `npm run build` completes without errors. Check generated static metadata files.

- [ ] 7. Verify contact API route uses talkyd.com domain in email templates
      Confirm contact form email sending is correctly configured.
      Files: `/src/app/api/contact/route.ts` (verify, no changes if correct)
      Verification:
      - toEmail set to 'info@talkyd.com' ✓
      - Email templates reference 'Talkyd Industrials' (not old company name) ✓
      - Footer of email template links to 'https://talkyd.com' ✓
      - Subject prefixes use [QUOTE REQUEST] and [WEBSITE INQUIRY] format ✓
      Verify: `npm run build` completes. Review code for talkyd.com references (no actual email send required).

- [ ] 8. Verify ContactForm.tsx references Talkyd Industrials correctly
      Confirm contact form component uses correct company branding.
      Files: `/src/components/sections/ContactForm.tsx` (verify, no changes if correct)
      Verification:
      - Success message states: "Thank you for contacting Talkyd Industrials..." ✓
      - Form labels and placeholders appropriate ✓
      - No old company names in form text ✓
      Verify: `npm run build` completes without errors.

### Phase 4: Domain & Branding Reference Check

- [ ] 9. Verify no remaining mbonyange/chembridge references in source code
      Confirm old company name has been fully removed from codebase (excluding lock files).
      Files: All source files in `/src/**`
      Verification: Run grep search for "mbonyange", "chembridge", "chembridge africa" (case-insensitive).
      Expected result: No matches in `/src/` directory files.
      Verify: Execute search command below and confirm zero matches:
      ```bash
      grep -r "mbonyange\|chembridge" src/ --include="*.tsx" --include="*.ts" --include="*.json" --include="*.css" --include="*.md"
      ```
      Exit code should be 1 (no matches found).

- [ ] 10. Verify package.json metadata is correct
      Confirm package.json has been updated with new company identity.
      Files: `/package.json` (verify, no changes if correct)
      Verification:
      - name: "talkyd-industrials-website" ✓
      - version: semantically appropriate (2.0.0 or higher) ✓
      - description includes "Talkyd Industrials" and "Industrial Chemical Distribution & Supply" ✓
      - author: "Talkyd Industrials - SMC Ltd" ✓
      - private: true (appropriate for internal project) ✓
      Verify: `npm install` runs without errors (lock file will regenerate, old references will be removed).

### Phase 5: Build & Verification

- [ ] 11. Build project and verify no errors
      Compile the project to ensure all changes are valid and generate optimized output.
      Files: Entire project
      Command: `npm run build`
      Expected: Build completes successfully with no errors or warnings related to:
      - Missing metadata
      - Schema validation
      - Missing pages
      - Invalid URLs
      Verify: `npm run build` exits with code 0 and produces `.next/` output directory.

- [ ] 12. Verify development server starts and pages load correctly
      Test that the site works correctly in development mode and all pages render.
      Files: Entire project (runtime verification)
      Command: `npm run dev` (run in separate terminal)
      Expected: Dev server starts on localhost:3000 without errors.
      Manual checks (in browser at http://localhost:3000):
      - Homepage loads and displays Talkyd branding ✓
      - Navigation links work (/about, /products, /departments, /industries, /contact, /company-transition) ✓
      - About page displays mission/vision/values ✓
      - Company-transition page displays correctly with transition explanation ✓
      - Footer displays and contains company information link ✓
      - Contact form renders without console errors ✓
      - Sitemap accessible at /sitemap.xml ✓
      - Robots.txt accessible at /robots.txt ✓
      Verify: Dev server runs without errors. All pages load and display content correctly.

---

## Summary of Changes

| Component | Status | URL/File | Key Updates |
|-----------|--------|----------|------------|
| Structured Data | ADD | layout.tsx | JSON-LD Organization schema |
| Footer Navigation | UPDATE | Footer.tsx | Add company-transition link |
| Sitemap | VERIFY | sitemap.ts | Confirm talkyd.com URLs |
| Robots.txt | VERIFY | robots.ts | Confirm talkyd.com/sitemap.xml |
| Root Metadata | VERIFY | layout.tsx | Confirm company branding |
| Contact API | VERIFY | api/contact/route.ts | Confirm talkyd.com references |
| Contact Form | VERIFY | ContactForm.tsx | Confirm Talkyd branding |
| Old References | CLEAN | src/ | Confirm no mbonyange/chembridge |
| Package.json | VERIFY | package.json | Confirm metadata updated |

---

## Verification Steps (Post-Implementation)

After all changes are complete, run these commands to verify the rebrand is complete:

```bash
# 1. Check for old references (should return exit code 1 = no matches)
grep -r "mbonyange\|chembridge" src/ --include="*.tsx" --include="*.ts" --include="*.json" --include="*.css" --include="*.md"

# 2. Build the project
npm run build

# 3. Start dev server and test
npm run dev

# 4. Verify sitemap (in browser at http://localhost:3000/sitemap.xml)
# 5. Verify robots.txt (in browser at http://localhost:3000/robots.txt)
# 6. Visit pages and verify:
#    - Homepage displays "Talkyd Industrials"
#    - About page shows correct mission/vision
#    - Company-transition page is accessible and explains transition
#    - Footer contains link to company-transition page
#    - Contact form sends to info@talkyd.com
```

---

## Next Steps After Plan Completion

1. **Commit changes to feature branch**: Create a commit with message "rebrand: Talkyd Industrials corporate rebrand and SEO migration"
2. **Submit for review**: Create pull request with link to company-transition page and verification results
3. **Deploy to production**: Once PR is approved, merge and deploy to production
4. **Monitor search console**: Track indexation of new talkyd.com URLs in Google Search Console
5. **Update DNS/domain settings**: Ensure https://talkyd.com resolves correctly
6. **Submit sitemap to search engines**: Add talkyd.com/sitemap.xml to Google Search Console and Bing Webmaster Tools
7. **Set up 301 redirects** (if old domain is still registered): Redirect mbonyange.com → talkyd.com to preserve SEO value

---

## Notes

- **JSON-LD Schema**: This is the primary missing piece. Adding Organization schema ensures Google, Bing, and AI search systems recognize TALKYD INDUSTRIALS - SMC LTD as the official current identity.
- **Company-transition page**: This page provides transparency for customers and search engines about the brand transition, reducing confusion and supporting SEO.
- **No legal merger claims**: The plan correctly avoids implying any legal merger or acquisition between Mbonyange and Talkyd unless explicitly verified. It describes this as a business transition.
- **Verified contact details**: No unverified phone numbers, addresses, or social media links are included in structured data—only information confirmed in the codebase.
- **Package-lock.json**: The old "chembridge-africa-website" reference will be removed automatically when npm install/update is run.

