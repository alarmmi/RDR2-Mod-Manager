---
layout: default
title: RDR2 Mod Manager Features
description: Explore RDR2 Mod Manager features: mod profiles, automatic backups, conflict detection, LML support, ASI plugin tracking, and safe mod workflows.
permalink: /features/
nav_order: 4
---

# RDR2 Mod Manager Features

**RDR2 Mod Manager** is built around safe, understandable workflows for **Red Dead Redemption 2 mods**.

## Mod profiles

Profiles let you create multiple Red Dead Redemption 2 mod setups without manually moving folders.

Examples:

- `vanilla-safe` for a clean baseline;
- `graphics-ultra` for texture packs, Reshade, and visual presets;
- `realism` for gameplay balance and immersion mods;
- `testing` for checking one new mod at a time.

## Backup and restore

The backup system stores changed files before a mod is installed or disabled. It helps with:

- restoring a broken RDR2 installation;
- comparing modded and clean files;
- preparing before major graphics packs;
- reverting a bad mod update.

## Conflict detection

The conflict scanner checks whether multiple mods write to the same destination. It is especially useful for large RDR2 texture packs, overhaul mods, and loose file replacements.

## LML-friendly organization

Many RDR2 single-player mods use an `lml` folder. RDR2 Mod Manager keeps LML-style mods grouped, labeled, and easier to enable or disable.

## ASI plugin tracking

ASI plugins can be powerful but hard to track manually. The manager can list `.asi` files, mark which profile uses them, and warn before disabling shared dependencies.

## Transparent manifests

Each mod can include a manifest file so advanced users can see exactly what the manager will install, move, or disable.

## No hidden magic

The project is intentionally transparent. It should never silently delete files, hide changes, or modify online services.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
