---
layout: default
title: RDR2 Mods Not Loading: Troubleshooting Guide
description: Fix common Red Dead Redemption 2 mod problems including RDR2 mods not loading, crashes, missing LML folders, ASI plugin issues, and broken backups.
permalink: /troubleshooting/
nav_order: 8
---

# RDR2 Mods Not Loading: Troubleshooting Guide

Use this troubleshooting guide when **RDR2 mods are not loading**, the game crashes, or Red Dead Redemption 2 starts with the wrong mod profile.

## RDR2 mods are not loading

Check these first:

1. The game path is correct.
2. The mod is enabled in the active profile.
3. Required dependencies are installed.
4. The mod files are in the expected destination.
5. Another mod is not overwriting the same files.

Run:

```bash
rdr2mm scan --verbose
rdr2mm conflicts --profile current
```

## Game crashes after installing a mod

1. Disable the newest mod.
2. Restore the latest backup if needed.
3. Launch the game without mods.
4. Re-enable one mod at a time.
5. Check whether the mod requires a specific dependency.

## LML mod not detected

Make sure the mod layout includes a valid `lml/` structure. If the downloaded archive contains another folder inside it, the manager may need to import the inner folder instead of the outer archive.

## ASI plugin problem

ASI plugin issues are often caused by missing dependencies, outdated files, or duplicate plugin versions. Keep only the version required by your active profile.

## Reshade preset not working

Check whether the preset files were installed into the correct RDR2 folder and whether the preset path inside the Reshade configuration is correct.

## Backup restore failed

If restore fails:

- check free disk space;
- close the game and launcher;
- run the manager with normal user permissions first;
- avoid restoring while files are locked;
- verify the backup manifest.

## The safe reset method

When you are unsure what broke:

```bash
rdr2mm profile activate vanilla-safe
rdr2mm backup restore clean-install
rdr2mm scan --game "C:\Path\To\Red Dead Redemption 2"
```

Then add mods back one by one.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
