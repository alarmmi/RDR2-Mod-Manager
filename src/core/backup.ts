import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

export interface BackupEntry {
  source: string;
  destination: string;
  action: 'copy' | 'overwrite' | 'delete';
}

export interface BackupManifest {
  backupId: string;
  createdAt: string;
  gamePath: string;
  files: BackupEntry[];
}

export async function createBackupManifest(
  backupPath: string,
  manifest: BackupManifest
): Promise<string> {
  await mkdir(backupPath, { recursive: true });
  const filePath = join(backupPath, `${manifest.backupId}.backup.json`);
  await writeFile(filePath, JSON.stringify(manifest, null, 2), 'utf8');
  return filePath;
}

export async function copyWithParents(source: string, destination: string): Promise<void> {
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(source, destination);
}
