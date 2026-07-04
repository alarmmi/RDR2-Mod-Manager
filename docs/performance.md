---
layout: default
title: RDR2 Mod Manager Performance Guide
description: Optimize RDR2 Mod Manager scanning, backups, hashing, conflict detection, and large Red Dead Redemption 2 mod libraries.
permalink: /performance/
nav_order: 13
---

# RDR2 Mod Manager Performance Guide

Large **RDR2 mod libraries** can contain thousands of files. This guide explains how to keep scans, backups, and conflict checks fast.

## Performance goals

RDR2 Mod Manager should:

- avoid unnecessary full-folder scans;
- cache file hashes;
- skip unchanged files;
- process large texture packs efficiently;
- show progress for long operations;
- avoid blocking the UI during backups.

## Hash caching

Hashing every file on every scan can be slow. The manager should store file size, modified time, and hash values so unchanged files can be skipped.

## Incremental backups

Instead of copying the same file repeatedly, backups can store deduplicated content and reference it from multiple restore points.

## Conflict scan optimization

Conflict detection can be fast when the manager builds a destination map:

```text
destination path -> list of mods writing to that path
```

Then conflicts can be found without comparing every mod against every other mod.

## Large mod packs

For huge texture packs or Reshade shader folders:

- keep backups outside the game directory;
- use SSD storage when possible;
- avoid real-time antivirus scanning on backup folders if your security policy allows it;
- test one large pack at a time.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
