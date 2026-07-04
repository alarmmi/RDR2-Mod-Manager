import { access, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import type { ScanResult } from '../types.js';
import { RDR2_EXECUTABLE_CANDIDATES } from './constants.js';

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export async function scanGameFolder(gamePath: string): Promise<ScanResult> {
  const warnings: string[] = [];
  const hasExecutable = await Promise.all(
    RDR2_EXECUTABLE_CANDIDATES.map((name) => exists(join(gamePath, name)))
  );

  if (!hasExecutable.some(Boolean)) {
    warnings.push('No known Red Dead Redemption 2 executable found in the selected game path.');
  }

  const entries = await readdir(gamePath, { withFileTypes: true }).catch(() => []);
  const names = entries.map((entry) => entry.name);

  return {
    gamePath,
    lmlDetected: names.includes('lml'),
    asiPlugins: names.filter((name) => name.toLowerCase().endsWith('.asi')),
    reshadeFiles: names.filter((name) => /^reshade/i.test(name)),
    warnings
  };
}
