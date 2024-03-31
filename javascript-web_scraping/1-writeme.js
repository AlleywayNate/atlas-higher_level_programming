#!/usr/bin/node

const fs = require('fs');

// Check if the correct number of arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: ./1-writeme.js <file_path> <string_to_write>');
  process.exit(1);
}

const filePath = process.argv[2];
const stringToWrite = process.argv[3];

// Write the string to the file
fs.writeFile(filePath, stringToWrite, 'utf8', (error) => {
  if (error) {
    console.error(error);
  }
});