---
title: HTMLPlayer
slug: HTMLPlayer
tagline: Local-first audio player for web and desktop
summary: A local-first audio player for the browser and desktop, with playlists, metadata, lyrics, visualizers, and offline storage.
repo: https://github.com/HTMLToolkit/HTMLPlayer
live: https://htmltoolkit.github.io/HTMLPlayer/
beta: https://htmltoolkit.github.io/beta/HTMLPlayer/
tech:
  - React
  - TypeScript
  - Vite
  - Zustand
  - Tauri
license: MIT
featured: true
kind: tool
icon: music
screenshots:
  - /images/projects/htmlplayer/MainUI.png
  - /images/projects/htmlplayer/CustomizedUI.png
  - /images/projects/htmlplayer/LyricsandVisualizer.png
---

HTMLPlayer is a local-first audio player for the browser and, through Tauri, for Windows, macOS, and Linux.

Version 1 was a single HTML file. Version 2 is a rewrite in React, TypeScript, Vite, and Zustand. The library lives in OPFS, so playback does not need a server.

## Features

- Import with drag and drop, the file picker, a directory picker, the OS share sheet, or Web Share Target.
- Playlists and folders, with drag-and-drop reordering and bulk select.
- Metadata details: codec, bitrate, sample rate, channels, bit depth, container, profile, and gapless offsets.
- Lyrics drawer that prefers embedded lyrics and falls back to lyrics.ovh.
- Crossfade, optional gapless playback, smart shuffle, and preloading of the next track.
- 60+ visualizers and a Document Picture-in-Picture mini player.
- Themes, icon sets, wallpapers, editable keyboard shortcuts, and light, dark, or auto mode.
- English and French translations.

## Build

- Web: run `npm install` then `npm run dev:web` or `npm run build:web` inside `Build/`.
- Desktop: `npm run build:desktop` with Tauri. Rust stable is required.
- Node.js 18+ and npm 9+.

Development happens on the `v2.0.0` branch. The `main` branch is behind.
