---
layout: default
title: Quick Start: Install and Enable RDR2 Mods Safely
description: A beginner-friendly quick start for installing, enabling, disabling, and testing Red Dead Redemption 2 mods with RDR2 Mod Manager.
permalink: /quick-start/
nav_order: 3
---

# Quick Start: Install and Enable RDR2 Mods Safely

This quick start shows the safest beginner workflow for using **RDR2 Mod Manager** with **Red Dead Redemption 2 PC mods**.

## 1. Create a clean backup

Before you install a mod, create a backup:

```bash
rdr2mm backup create --name clean-install
```

A clean backup helps you restore the game folder if a graphics mod, LML mod, ASI plugin, or configuration file breaks your setup.

## 2. Scan your game folder

```bash
rdr2mm scan --game "C:\Path\To\Red Dead Redemption 2"
```

The scanner looks for common RDR2 modding files and folders such as:

- `lml/`
- `.asi` plugins
- `ScriptHookRDR2.dll`
- Reshade files
- loose replacement files
- known configuration files

## 3. Create a mod profile

```bash
rdr2mm profile create story-mode
```

Profiles let you switch between different RDR2 mod loadouts:

- vanilla-safe;
- graphics overhaul;
- realism gameplay;
- roleplay;
- testing.

## 4. Enable one mod at a time

```bash
rdr2mm mod enable my-rdr2-mod --profile story-mode
```

After enabling a mod, launch the game and test before adding more mods. This makes troubleshooting much easier.

## 5. Disable a problem mod

```bash
rdr2mm mod disable my-rdr2-mod --profile story-mode
```

If RDR2 crashes, freezes, or fails to load mods, disable the newest mod first and read the [troubleshooting guide](troubleshooting.md).

## Best practice

Do not install ten mods at once. Install one, test, then continue. Safe RDR2 modding is slower at the beginning but much faster when something goes wrong.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
