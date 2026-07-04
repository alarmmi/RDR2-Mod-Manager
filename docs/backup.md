---
layout: default
title: Backup and Restore Red Dead Redemption 2 Mods
description: Learn how to backup and restore Red Dead Redemption 2 mods safely with RDR2 Mod Manager before installing LML mods, ASI plugins, texture packs, or Reshade presets.
permalink: /backup/
nav_order: 9
---

# Backup and Restore Red Dead Redemption 2 Mods

Backups are the most important part of safe **Red Dead Redemption 2 mod management**.

## What should be backed up

RDR2 Mod Manager should back up:

- files that will be overwritten;
- files that will be deleted or disabled;
- active profile metadata;
- mod manifests;
- configuration files changed by the manager.

## Create a backup

```bash
rdr2mm backup create --name before-realism-pack
```

Use descriptive backup names. Good names include:

- `clean-install`;
- `before-lml-setup`;
- `before-graphics-overhaul`;
- `before-script-mods`.

## Restore a backup

```bash
rdr2mm backup restore before-realism-pack
```

Close Red Dead Redemption 2 and any launcher before restoring. Locked files can cause incomplete restores.

## Backup manifest

A backup manifest records what changed:

```json
{
  "backupId": "before-realism-pack",
  "createdAt": "2026-07-04T12:00:00Z",
  "gamePath": "C:/Games/Red Dead Redemption 2",
  "files": [
    {
      "source": "lml/example/install.xml",
      "hash": "sha256-placeholder",
      "action": "overwrite"
    }
  ]
}
```

## Backup best practices

- Keep a clean install backup.
- Back up before installing large mod packs.
- Do not store backups inside the game directory.
- Delete old backups only after verifying a stable setup.
- Keep separate backups for separate profiles.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
