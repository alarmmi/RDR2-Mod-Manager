# Contributing to RDR2 Mod Manager

Thank you for helping improve **RDR2 Mod Manager**, an open-source Red Dead Redemption 2 mod manager for PC players.

## Good first contributions

- Improve installation instructions for Steam, Epic Games, and Rockstar Launcher builds.
- Add safe troubleshooting steps for common RDR2 mod problems.
- Add compatibility notes for LML, ASI plugins, ScriptHook-based mods, texture packs, and Reshade presets.
- Improve TypeScript tests.
- Add screenshots with descriptive alt text.

## Development setup

```bash
git clone https://github.com/alarmmi/RDR2-Mod-Manager.git
cd RDR2-Mod-Manager
npm install
npm test
npm run build
```

## Documentation style

When writing docs, use natural keywords instead of keyword stuffing. Good examples:

- “install RDR2 mods safely”
- “backup Red Dead Redemption 2 mods”
- “fix RDR2 mods not loading”
- “RDR2 LML mod manager”

Every page should have:

1. one clear H1;
2. a short introduction;
3. practical steps;
4. links to related docs;
5. no misleading claims.

## Pull request checklist

- [ ] I tested the change locally.
- [ ] I updated docs when behavior changed.
- [ ] I did not add code that bypasses DRM, enables cheating, or modifies online services.
- [ ] I used respectful language and followed the Code of Conduct.
