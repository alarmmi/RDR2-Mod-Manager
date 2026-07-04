export type ModType = 'lml' | 'asi' | 'reshade' | 'texture' | 'config' | 'loose';

export interface Rdr2mmConfig {
  gamePath: string;
  modLibraryPath: string;
  backupPath: string;
  activeProfile: string;
  conflictDetection: boolean;
  hashAlgorithm: 'sha256' | 'sha512';
  safeMode?: boolean;
  dryRunByDefault?: boolean;
}

export interface ModManifest {
  id: string;
  name: string;
  version: string;
  type: ModType;
  game: 'red-dead-redemption-2';
  files: string[];
  requires: string[];
  conflictsWith: string[];
  description?: string;
  author?: string;
  homepage?: string;
  tags?: string[];
}

export interface ModProfile {
  name: string;
  description?: string;
  enabledMods: string[];
  createdAt: string;
  notes?: string;
}

export interface ScanResult {
  gamePath: string;
  lmlDetected: boolean;
  asiPlugins: string[];
  reshadeFiles: string[];
  warnings: string[];
}

export interface Conflict {
  destination: string;
  modIds: string[];
  severity: 'info' | 'warning' | 'danger';
}
