#!/usr/bin/env node
const { readFileSync } = require('fs');

// get file name from command line
const { argv } = process;
const file = argv[2];

if (!file) {
  console.log('Usage: asynode path/to/file.js');
  process.exit(0);
}

// read file content
let fileContent;

try {
  fileContent = readFileSync(file, 'utf8');
} catch (e) {
  console.log(`Error: "${file}" doesn't exist`);
  process.exit(1);
}

// evaluate JavaScript code and run as async IIFE
eval(`(async function() {
  ${fileContent}
})()`);
