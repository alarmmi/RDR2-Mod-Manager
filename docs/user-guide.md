---
layout: default
title: RDR2 Mod Manager User Guide
description: Complete user guide for managing Red Dead Redemption 2 mods, profiles, backups, conflicts, and safe mod testing workflows.
permalink: /user-guide/
nav_order: 5
---

# RDR2 Mod Manager User Guide

This user guide explains how to use **RDR2 Mod Manager** for everyday Red Dead Redemption 2 mod management.

## Core concepts

### Game path

The game path is the folder where Red Dead Redemption 2 is installed. The manager needs this path to scan files, create backups, and apply profiles.

### Mod library

The mod library is where downloaded mods are stored before they are applied to the game folder.

### Profile

A profile is a named collection of enabled mods. You can keep separate profiles for graphics mods, roleplay mods, realism mods, and testing.

### Manifest

A manifest describes a mod: name, version, type, required files, dependencies, and conflicts.

## Typical workflow

1. Create or import a mod.
2. Review the manifest.
3. Create a backup.
4. Enable the mod in a profile.
5. Run a conflict scan.
6. Launch RDR2 and test.
7. Keep notes in the profile.

## Importing a mod

```bash
rdr2mm mod import "C:\Downloads\my-rdr2-mod.zip"
```

The manager should unpack the mod into the mod library, detect known layouts, and generate a draft manifest.

## Creating a profile

```bash
rdr2mm profile create graphics-ultra
```

Use short names that describe the purpose of the loadout.

## Enabling mods

```bash
rdr2mm mod enable realistic-weather --profile graphics-ultra
```

A safe manager should show planned file operations before applying them.

## Disabling mods

```bash
rdr2mm mod disable realistic-weather --profile graphics-ultra
```

Disabling should remove or deactivate the mod files without damaging backups or unrelated mods.

## Troubleshooting workflow

When something breaks:

1. switch to `vanilla-safe`;
2. verify the game launches;
3. enable only the suspected dependency;
4. enable one mod at a time;
5. check logs;
6. restore from backup if needed.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
