import { readFile } from 'node:fs/promises';
import type { ModManifest } from '../types.js';

export function validateManifest(manifest: ModManifest): void {
  if (!manifest.id) throw new Error('Manifest is missing id.');
  if (!manifest.name) throw new Error('Manifest is missing name.');
  if (!manifest.version) throw new Error('Manifest is missing version.');
  if (manifest.game !== 'red-dead-redemption-2') {
    throw new Error('Manifest game must be red-dead-redemption-2.');
  }
  if (!Array.isArray(manifest.files) || manifest.files.length === 0) {
    throw new Error('Manifest must include at least one file.');
  }
}

export async function loadManifest(path: string): Promise<ModManifest> {
  const raw = await readFile(path, 'utf8');
  const manifest = JSON.parse(raw) as ModManifest;
  validateManifest(manifest);
  return manifest;
}
