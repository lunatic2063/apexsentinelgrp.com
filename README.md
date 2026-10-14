# apexsentinelgrp.com

Static website for Apex Sentinel Group LLC. Plain HTML and CSS, no build step.

## Before going live (after SAM.gov activation)
All placeholders are filled in (UEI KWA3GQY19KP7, CAGE 25YB0). Location: Lehigh Valley, PA.
- Optional: add a revised capability statement PDF to assets/ and link it

## Deploy on GitHub Pages
1. Create a repository (for example `apexsentinelgrp.com`) and upload these files to the root.
2. Settings > Pages > Source: Deploy from a branch, `main`, `/ (root)`.
3. The CNAME file sets the custom domain to apexsentinelgrp.com.
4. In Porkbun DNS, add A records for the apex domain pointing to
   185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153,
   and a CNAME record for `www` pointing to `lunatic2063.github.io`.
   Do not change the MX, SPF, DKIM, or DMARC records used by Microsoft 365.
5. After DNS resolves, check "Enforce HTTPS" in Settings > Pages.
