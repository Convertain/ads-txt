# ads.txt Redirect Repository

This repository hosts a public `ads.txt` file used to comply with Google AdSense requirements for platforms that do not support direct ads.txt publishing (e.g., ClickFunnels, Ghost, etc.).

## Purpose

Some platforms do not allow uploading a custom `ads.txt` file. To work around this, we use the link to the raw ads.txt file in this GitHub repository in combination with a Worker on Cloudflare to redirect requests from /ads.txt to the file here.

Redirects are explained in [Google Adsense's FAQ](https://support.google.com/adsense/answer/9785052?hl=en&sjid=17339893654651491626-NA#)

## Current ads.txt Content

`google.com, pub-9190930232339721, DIRECT, f08c47fec0942fa0`

## Usage

1. Point a subdomain (e.g., `ads.yourdomain.com`) to GitHub Pages.
2. Set up a redirect or instruct services to check `https://ads.yourdomain.com/ads.txt`.
3. Ensure this repository remains publicly accessible.
