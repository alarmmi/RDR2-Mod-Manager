---
layout: default
title: Supported RDR2 Mods and Mod Types
description: Supported Red Dead Redemption 2 mod types for RDR2 Mod Manager, including LML mods, ASI plugins, ScriptHook mods, texture packs, Reshade presets, and config-only mods.
permalink: /supported-mods/
nav_order: 7
---

# Supported RDR2 Mods and Mod Types

RDR2 Mod Manager is designed to support common **Red Dead Redemption 2 PC mod** layouts. This page describes mod types, not endorsements of specific third-party mods.

## Supported mod types

### LML mods

LML-style mods often use an `lml/` folder and structured mod files. RDR2 Mod Manager can group these mods and enable or disable them by profile.

### ASI plugins

ASI plugins usually live near the game executable. The manager can track `.asi` files and warn when several mods depend on the same loader.

### ScriptHook-based mods

ScriptHook-based mods may require external dependencies. RDR2 Mod Manager should detect missing dependency names in the manifest, but users must install third-party tools from trusted sources.

### Reshade presets

Reshade presets can include `.ini`, shader, and texture folders. The manager can treat them as a file group and back them up before changes.

### Texture packs

Texture packs can be large and may overwrite the same files as other visual mods. Conflict detection is important here.

### Configuration-only mods

Some mods only change `.ini`, `.xml`, or `.dat` configuration files. These are supported if the manifest describes the exact destination.

## Unsupported content

RDR2 Mod Manager does not support:

- DRM bypass tools;
- stolen game files;
- online cheats;
- malware-like installers;
- mods that hide their file operations from the user.

## Adding a new supported mod layout

Create a manifest with:

```json
{
  "id": "your-mod-id",
  "name": "Your RDR2 Mod",
  "version": "1.0.0",
  "type": "lml",
  "files": ["lml/your-mod/install.xml"],
  "requires": ["lml"],
  "conflictsWith": []
}
```

Then test the mod in a clean profile before recommending it to other users.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
