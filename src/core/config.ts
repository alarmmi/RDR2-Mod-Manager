import { readFile } from 'node:fs/promises';
import type { Rdr2mmConfig } from '../types.js';

export async function loadConfig(path: string): Promise<Rdr2mmConfig> {
  const raw = await readFile(path, 'utf8');
  const parsed = JSON.parse(raw) as Partial<Rdr2mmConfig>;

  if (!parsed.gamePath) throw new Error('Missing config field: gamePath');
  if (!parsed.modLibraryPath) throw new Error('Missing config field: modLibraryPath');
  if (!parsed.backupPath) throw new Error('Missing config field: backupPath');

  return {
    gamePath: parsed.gamePath,
    modLibraryPath: parsed.modLibraryPath,
    backupPath: parsed.backupPath,
    activeProfile: parsed.activeProfile ?? 'vanilla-safe',
    conflictDetection: parsed.conflictDetection ?? true,
    hashAlgorithm: parsed.hashAlgorithm ?? 'sha256',
    safeMode: parsed.safeMode ?? true,
    dryRunByDefault: parsed.dryRunByDefault ?? true
  };
}
