---
layout: default
title: RDR2 Mod Manager Installation Guide
description: Install RDR2 Mod Manager for Red Dead Redemption 2 on Windows, configure your game path, and prepare safe backups before using mods.
permalink: /installation/
nav_order: 2
---

# RDR2 Mod Manager Installation Guide

This installation guide explains how to install **RDR2 Mod Manager** for **Red Dead Redemption 2 on PC**. It is written for players who want a safer way to manage RDR2 mods, LML mods, ASI plugins, ScriptHook-based files, and texture packs.

## Requirements

- Windows 10 or Windows 11.
- A legitimate PC copy of Red Dead Redemption 2.
- Node.js 20+ if you build from source.
- Enough free disk space for backups.
- Basic knowledge of where your RDR2 game folder is located.

## Recommended game folders

Common Red Dead Redemption 2 install paths include:

```text
C:\Program Files\Rockstar Games\Red Dead Redemption 2
C:\Program Files (x86)\Steam\steamapps\common\Red Dead Redemption 2
C:\Program Files\Epic Games\RedDeadRedemption2
```

Your path may be different. Always select the folder that contains the main game executable and data files.

## Install from GitHub

```bash
git clone https://github.com/alarmmi/RDR2-Mod-Manager.git
cd RDR2-Mod-Manager
npm install
npm run build
```

Then run:

```bash
npm run start -- scan --game "C:\Path\To\Red Dead Redemption 2"
```

## First launch checklist

1. Set your Red Dead Redemption 2 game path.
2. Create a backup before enabling any mod.
3. Scan for existing LML folders, ASI files, Reshade files, and loose mod files.
4. Create your first profile, for example `vanilla-safe`.
5. Enable one mod at a time and test the game.

## SEO note for maintainers

This page targets search intent around **install RDR2 mod manager**, **Red Dead Redemption 2 mod manager installation**, and **how to install RDR2 mods safely**. Keep those phrases natural and useful, not repeated artificially.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
