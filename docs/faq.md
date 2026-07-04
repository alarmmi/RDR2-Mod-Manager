---
layout: default
title: RDR2 Mod Manager FAQ
description: Frequently asked questions about RDR2 Mod Manager, Red Dead Redemption 2 mods, LML, ASI plugins, backups, compatibility, and troubleshooting.
permalink: /faq/
nav_order: 12
---

# RDR2 Mod Manager FAQ

This FAQ answers common questions about **RDR2 Mod Manager** and **Red Dead Redemption 2 PC mods**.

## What is RDR2 Mod Manager?

RDR2 Mod Manager is an open-source project for organizing Red Dead Redemption 2 single-player mods, profiles, backups, and conflicts.

## Is RDR2 Mod Manager official?

No. This is an unofficial community project and is not affiliated with Rockstar Games or Take-Two Interactive.

## Does it work with LML mods?

The project is designed to be LML-friendly by tracking `lml/` folder layouts and profile-specific enable or disable states.

## Does it work with ASI plugins?

The project can track `.asi` plugin files and warn about shared dependencies, duplicate versions, and risky changes.

## Can I use it for online cheating?

No. The project is for safe single-player mod management, not cheating, DRM bypass, or multiplayer abuse.

## Why are my RDR2 mods not loading?

Common causes include the wrong game path, missing dependencies, disabled profiles, incorrect folder structure, or mod conflicts. Start with the [troubleshooting guide](troubleshooting.md).

## How do I restore a clean game folder?

Use a clean backup if you created one:

```bash
rdr2mm backup restore clean-install
```

If you did not create a backup, use your launcher’s file verification feature and rebuild your mod profile slowly.

## What is the safest way to test a new mod?

Create a backup, enable only one new mod, test the game, and keep notes. Do not install many mods at once.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
