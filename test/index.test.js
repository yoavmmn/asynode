const { execSync } = require('child_process');

const runCommand = (arg = '') => execSync(`../index.js ${arg}`);

describe('CLI', () => {
  test('returns message when no argument passed', () => {
    const output = runCommand();
  });
});
