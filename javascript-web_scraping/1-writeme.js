#!/usr/bin/node

const fs = require('fs');

// Check if the correct number of arguments is provided
if (process.argv.length !== 4) {
  console.error('Usage: node 1-writeme.js <file_path> <string_to_write>');
  process.exit(1);
}

const filePath = process.argv[2]; // File path provided as the first argument
const stringToWrite = process.argv[3]; // String to write provided as the second argument

// Write the string to the file
fs.writeFile(filePath, stringToWrite, 'utf-8', (error) => {
  if (error) {
    // If an error occurred during writing, print the error object
    console.error(error);
  } else {
    // If writing was successful, print a success message
    console.log(`Content has been written to ${filePath}`);
  }
});