#!/usr/bin/env node
import { scanGameFolder } from '../core/scanner.js';
import { createProfile } from '../core/profile.js';
import { PROJECT_NAME } from '../core/constants.js';

const args = process.argv.slice(2);
const command = args[0];

function getOption(name: string): string | undefined {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

async function main(): Promise<void> {
  if (!command || command === '--help' || command === 'help') {
    console.log(`${PROJECT_NAME}

Commands:
  scan --game <path>
  profile create <name>
`);
    return;
  }

  if (command === 'scan') {
    const gamePath = getOption('--game');
    if (!gamePath) throw new Error('Missing --game <path>.');
    const result = await scanGameFolder(gamePath);
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  if (command === 'profile' && args[1] === 'create') {
    const name = args[2];
    if (!name) throw new Error('Missing profile name.');
    console.log(JSON.stringify(createProfile(name), null, 2));
    return;
  }

  throw new Error(`Unknown command: ${args.join(' ')}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
