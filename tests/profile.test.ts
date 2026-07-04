import { describe, expect, it } from 'vitest';
import { createProfile, disableMod, enableMod } from '../src/core/profile.js';

describe('profile', () => {
  it('creates and updates a profile', () => {
    const profile = createProfile('story-mode');
    const enabled = enableMod(profile, 'example-mod');
    const disabled = disableMod(enabled, 'example-mod');

    expect(enabled.enabledMods).toContain('example-mod');
    expect(disabled.enabledMods).not.toContain('example-mod');
  });
});
