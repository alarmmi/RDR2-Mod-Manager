import { describe, expect, it } from 'vitest';
import { findConflicts } from '../src/core/conflicts.js';
import type { ModManifest } from '../src/types.js';

const baseManifest = {
  version: '1.0.0',
  type: 'lml',
  game: 'red-dead-redemption-2',
  requires: [],
  conflictsWith: []
} satisfies Partial<ModManifest>;

describe('findConflicts', () => {
  it('detects duplicate destination paths', () => {
    const conflicts = findConflicts([
      { ...baseManifest, id: 'a', name: 'A', files: ['lml/shared/file.xml'] } as ModManifest,
      { ...baseManifest, id: 'b', name: 'B', files: ['LML/shared/file.xml'] } as ModManifest
    ]);

    expect(conflicts).toHaveLength(1);
    expect(conflicts[0].modIds).toEqual(['a', 'b']);
  });
});
