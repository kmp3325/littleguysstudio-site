# littleguysstudio.com

One-page company site for Little Guys Studio LLC, hosted on Cloudflare Pages.
Plain HTML and CSS, no build step.

This is the site given to Google Play as the **organization's website** for
developer account verification. The app's own site, and the privacy policy Play
and the OAuth consent screen point at, live separately at `pkhomedex.com` (see
`~/personal/pkhomedex-site`).

```
index.html      the whole site
assets/         style.css, site.js, pkhomedex-icon.png
```

## Deploying

Cloudflare Pages, connected to this private repo. Build command: none. Build
output directory: `/`. Every push to `main` deploys.

Custom domain `littleguysstudio.com` is added in the Pages project under Custom
domains. Cloudflare manages the DNS, so it creates the records itself.

## Before Play verification

- [ ] Add the LLC's registered mailing address. There is a commented block in
      `index.html` ready for it. Play checks that this site matches the business
      registration documents, and an address is the cheapest way to make that
      match obvious.
- [ ] Confirm the exact registered legal name reads correctly throughout.
- [ ] Verify the domain in Google Search Console as a **domain property** using
      the DNS TXT record. Cloudflare manages the DNS, so this is one record.
      Use the same Google account that owns the Play Console account, and the
      Play-side request approves automatically.
