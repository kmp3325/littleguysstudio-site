# littleguysstudio.com

One-page company site for Little Guys Studio LLC, hosted on Cloudflare Pages.
Plain HTML and CSS, no build step.

This is the site given to Google Play as the **organization's website** for
developer account verification. The app's own site, and the privacy policy Play
and the OAuth consent screen point at, live separately at `pkhomedex.com` (see
`~/personal/pkhomedex-site`).

```
public/                 everything that gets deployed, and nothing else
  index.html            the whole site
  assets/               style.css, pkhomedex-icon.png
README.md               internal; deliberately outside public/
```

**Keep notes out of `public/`.** Cloudflare publishes that directory verbatim,
so anything inside it is fetchable by URL.

## Deploying

Cloudflare Pages, connected to this private repo. Framework preset: none.
Build command: **empty**. Build output directory: **`public`**. Every push to
`main` deploys.

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

## Deliberate omissions

Notes live here, not in HTML comments. Comments in `public/` are served to
visitors, so anything explaining strategy or walking back an earlier decision
belongs in this file instead.

- **No registered mailing address on the page.** Play verifies the organization
  from the D-U-N-S record and the uploaded formation documents, never from this
  site, so publishing it buys nothing. It would also make a crawlable target of
  an address whose Northwest RA plan covers only five non-legal mail pieces a
  year. The address is public on the Play listing regardless, since the app
  monetizes; that is unavoidable and separate.
- **No claims about this site's own cookies or tracking.** There was one. It was
  overstated (Cloudflare receives request logs and NEL error reports like any
  host) and fragile: turning on Bot Fight Mode or Cloudflare Web Analytics would
  have falsified it with nobody noticing. Data handling is described in the app's
  privacy policy, which this page links to.
