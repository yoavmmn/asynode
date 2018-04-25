const { join } = require('path');
const { execSync } = require('child_process');

const cli = join(__dirname, '../index.js');
const runCommand = (arg = '') => execSync(`${cli} ${arg}`, { encoding: 'utf8' });

describe('CLI', () => {
  test('should return message when no argument passed', () => {
    const output = runCommand();

    expect(output).toEqual('Usage: asynode path/to/file.js\n');
  });

  test('should return error when file does\'nt exist', () => {
    try {
      runCommand('test/awaitFile2.js');
    } catch (e) {
      expect(e.stdout).toEqual('Error: "test/awaitFile2.js" doesn\'t exist\n');
    }
  });

  test('should work without async function on main logic', () => {
    const output = runCommand('test/awaitFile.js');

    expect(output).toEqual('{ success: true }\n');
  });
});
