import type { ModProfile } from '../types.js';

export function createProfile(name: string, description?: string): ModProfile {
  if (!/^[a-z0-9][a-z0-9-]{1,48}$/.test(name)) {
    throw new Error('Profile name must use lowercase letters, numbers, and hyphens.');
  }

  return {
    name,
    description,
    enabledMods: [],
    createdAt: new Date().toISOString()
  };
}

export function enableMod(profile: ModProfile, modId: string): ModProfile {
  if (profile.enabledMods.includes(modId)) return profile;
  return { ...profile, enabledMods: [...profile.enabledMods, modId] };
}

export function disableMod(profile: ModProfile, modId: string): ModProfile {
  return {
    ...profile,
    enabledMods: profile.enabledMods.filter((id) => id !== modId)
  };
}
