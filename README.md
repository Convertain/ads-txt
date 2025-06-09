# ads.txt Redirect Repository

This repository hosts a public `ads.txt` file used to comply with Google AdSense requirements for platforms that do not support direct ads.txt publishing (e.g., ClickFunnels, Ghost, etc.).

## Purpose

Some platforms do not allow uploading a custom `ads.txt` file. To work around this, we use a custom domain (e.g., `ads.yourdomain.com`) pointing to this repository via GitHub Pages, then redirect traffic to the appropriate ads.txt file.

## Current ads.txt Content

`google.com, pub-9190930232339721, DIRECT, f08c47fec0942fa0`

## Usage

1. Point a subdomain (e.g., `ads.yourdomain.com`) to GitHub Pages.
2. Set up a redirect or instruct services to check `https://ads.yourdomain.com/ads.txt`.
3. Ensure this repository remains publicly accessible.
