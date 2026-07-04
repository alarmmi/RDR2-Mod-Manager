---
layout: default
title: RDR2 Mod Manager Compatibility
description: Compatibility notes for RDR2 Mod Manager with Red Dead Redemption 2 PC versions, LML mods, ASI plugins, ScriptHookRDR2, Reshade, and mod profiles.
permalink: /compatibility/
nav_order: 6
---

# RDR2 Mod Manager Compatibility

This page describes compatibility goals for **RDR2 Mod Manager**.

## Supported game target

RDR2 Mod Manager targets **Red Dead Redemption 2 on PC** for single-player mod organization.

## Mod categories

| Category | Compatibility goal | Notes |
|---|---|---|
| LML mods | Supported | Keep `lml/` folders organized and profile-aware. |
| ASI plugins | Supported with warnings | Track `.asi` files and shared dependencies. |
| ScriptHook-based mods | Supported with dependency checks | Do not bundle third-party loaders. |
| Reshade presets | Supported as file groups | Users should verify preset instructions. |
| Texture packs | Supported with conflict scanning | Large file sets may require longer scans. |
| Save files | Planned | Save backups need extra safety checks. |
| Online cheats | Not supported | The project is not for cheating or multiplayer abuse. |

## Steam, Epic Games, and Rockstar Launcher

The manager is designed around the local game folder, so the launcher matters less than the file layout. However, each launcher may install Red Dead Redemption 2 in a different location.

## Safe compatibility policy

RDR2 Mod Manager should not:

- bypass DRM;
- patch the game executable to avoid ownership checks;
- distribute copyrighted game files;
- enable online cheating;
- hide unsafe changes from users.

## Compatibility checklist for a new mod

Before marking a mod as supported, confirm:

1. the mod has a clear install structure;
2. the files can be disabled safely;
3. dependencies are known;
4. conflicts can be detected;
5. the user can restore a backup.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
