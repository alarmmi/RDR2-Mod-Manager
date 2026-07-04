---
layout: default
title: RDR2 Mod Manager Configuration
description: Configure RDR2 Mod Manager paths, profiles, backup settings, conflict detection, and mod library settings for Red Dead Redemption 2 on PC.
permalink: /configuration/
nav_order: 10
---

# RDR2 Mod Manager Configuration

RDR2 Mod Manager can be configured with a JSON file. The default example is available in [`examples/rdr2mm.config.example.json`](../examples/rdr2mm.config.example.json).

## Example configuration

```json
{
  "gamePath": "C:/Games/Red Dead Redemption 2",
  "modLibraryPath": "D:/RDR2 Mods/Library",
  "backupPath": "D:/RDR2 Mods/Backups",
  "activeProfile": "vanilla-safe",
  "conflictDetection": true,
  "hashAlgorithm": "sha256"
}
```

## Configuration fields

| Field | Purpose |
|---|---|
| `gamePath` | Red Dead Redemption 2 installation folder. |
| `modLibraryPath` | Folder where imported mods are stored. |
| `backupPath` | Folder where backups are stored. |
| `activeProfile` | Current mod profile name. |
| `conflictDetection` | Enables duplicate destination checks. |
| `hashAlgorithm` | Hash method used for file verification. |

## Environment variables

Advanced users can set:

```bash
RDR2MM_GAME_PATH="C:\Games\Red Dead Redemption 2"
RDR2MM_CONFIG_PATH="C:\Users\You\.rdr2mm\config.json"
```

## Configuration safety

Avoid placing backups inside the game folder. If a mod install goes wrong, backups inside the same folder can be harder to separate from modded files.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
