---
layout: default
title: RDR2 Mod Manager Architecture
description: Technical architecture for RDR2 Mod Manager: profiles, manifests, backups, conflict detection, file operations, CLI, UI, and safety boundaries.
permalink: /architecture/
nav_order: 14
---

# RDR2 Mod Manager Architecture

This page explains the technical architecture of **RDR2 Mod Manager**.

## Architecture overview

```text
CLI / UI
  ↓
Application services
  ↓
Core domain modules
  ↓
File system adapter
  ↓
Red Dead Redemption 2 game folder / mod library / backups
```

## Core modules

| Module | Responsibility |
|---|---|
| `scanner` | Detect game folder state and known mod files. |
| `manifest` | Parse and validate mod manifests. |
| `profile` | Track enabled mods per profile. |
| `backup` | Create and restore safe backups. |
| `conflict` | Detect duplicate destinations and risky overwrites. |
| `installer` | Apply planned file operations. |
| `logger` | Record user-readable operations. |

## Safety boundaries

The core should never directly perform destructive file operations without a plan. The safer flow is:

1. build an operation plan;
2. show the plan to the user;
3. create backup entries;
4. apply changes;
5. verify results;
6. write a log.

## Data model

```ts
type ModManifest = {
  id: string;
  name: string;
  version: string;
  type: 'lml' | 'asi' | 'reshade' | 'texture' | 'config' | 'loose';
  files: string[];
  requires: string[];
  conflictsWith: string[];
};
```

## Why this architecture is SEO-friendly

The documentation mirrors the product architecture. Each page targets a real user problem: installation, backups, compatibility, performance, troubleshooting, and FAQ.


## Related RDR2 Mod Manager guides

- [Installation](installation.md)
- [Quick start](quick-start.md)
- [User guide](user-guide.md)
- [Troubleshooting](troubleshooting.md)
- [Backup and restore](backup.md)
- [FAQ](faq.md)
