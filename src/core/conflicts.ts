import type { Conflict, ModManifest } from '../types.js';

export function findConflicts(manifests: ModManifest[]): Conflict[] {
  const destinationMap = new Map<string, string[]>();

  for (const manifest of manifests) {
    for (const file of manifest.files) {
      const normalized = file.replaceAll('\\', '/').toLowerCase();
      const modIds = destinationMap.get(normalized) ?? [];
      modIds.push(manifest.id);
      destinationMap.set(normalized, modIds);
    }
  }

  return Array.from(destinationMap.entries())
    .filter(([, modIds]) => modIds.length > 1)
    .map(([destination, modIds]) => ({
      destination,
      modIds,
      severity: 'warning' as const
    }));
}
