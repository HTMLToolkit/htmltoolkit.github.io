---
title: HTMLTrack
slug: HTMLTrack
tagline: Package tracking with live status and maps
summary: Track parcels in the browser with live status, delivery windows, a map, and full scan history.
repo: https://github.com/HTMLToolkit/HTMLTrack
live: https://htmltoolkit.github.io/HTMLTrack/
beta: https://htmltoolkit.github.io/beta/HTMLTrack/
tech:
  - React
  - TypeScript
  - Vite
  - Cloudflare Workers
license: MIT
kind: tool
icon: package
---

HTMLTrack tracks parcels in one place and shows live status, delivery windows, and a map of each destination.

## Features

- Parcels are stored in IndexedDB with a localStorage fallback, so they survive a refresh.
- Delivery map built on MapLibre GL with Esri basemaps. No API key required, and markers follow the app theme.
- Estimated delivery window with a relative countdown.
- Full scan history per parcel, not just the latest status.
- Carrier auto-detect for UPS, FedEx, USPS, DHL, and Amazon.
- Active parcels refresh every five minutes in one batched request.
- Installs as a PWA.

The 17Track API key stays server-side in a small Cloudflare Worker.
