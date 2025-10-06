# R.B. Lottery Tracking - Demo Site

Static website to preview:
- `/display-demo.html`: Full-screen rotating banners (no ads, signage-safe)
- `/ads-demo.html`: Google AdSense responsive ad unit (placeholders until approval)
- `/privacy.html`: Minimal privacy policy
- `/ads.txt`: Placeholder; update with your publisher ID
- `/robots.txt`: Basic robots file

Important:
- Do not auto-refresh AdSense ads.
- AdSense is intended for real user traffic. For DOOH signage, use a DOOH platform or Google Ad Manager per policies.

## Deploy (Netlify)
1. Sign up at Netlify.
2. Drag-drop this folder to create a site.
3. Add custom domain `rblotterytracking.com` under Site settings -> Domain management.
4. Follow DNS steps (A records or nameservers).
5. Open `https://rblotterytracking.com/` to verify.

## Deploy (Vercel)
1. Sign up at Vercel -> New Project -> Import as static site.
2. Add domain under Settings -> Domains and follow DNS instructions.

## AdSense Setup (after approval)
1. Apply at https://adsense.google.com using `rblotterytracking.com`.
2. Replace placeholders in `/ads-demo.html`:
   - `ca-pub-XXXXXXXXXXXXXXXX` -> your publisher ID
   - `data-ad-slot="1234567890"` -> your ad slot
3. Update `/ads.txt` with your pub ID line:
   `google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0`
4. Keep a visible privacy policy page.

## Local test
```
python -m http.server 8080
# go to http://localhost:8080/
```
