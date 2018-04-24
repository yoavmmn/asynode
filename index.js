#!/usr/bin/env node
const { readFileSync } = require('fs');

// get file name from command line
const { argv } = process;
const file = argv[2];

// read file content
const fileContent = readFileSync(file, 'utf8');

// evaluate JavaScript code and run as async IIFE
eval(`(async function() {
  ${fileContent}
})()`);
