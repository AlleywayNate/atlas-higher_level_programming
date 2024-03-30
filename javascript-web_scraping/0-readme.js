#!/usr/bin/node
// The first line specifies the shebang (#!) for the script to be executed by Node.js.
// It tells the operating system to use Node.js to interpret this script.

// Importing the 'fs' module (file system) from the Node.js standard library.
const fs = require('fs');

// Asynchronously reads the content of a file.
// process.argv is an array containing the command line arguments passed when the Node.js process was launched.
// process.argv[2] contains the path of the file to be read, which is passed as an argument when running the script.
// 'utf8' specifies the encoding of the file (UTF-8).
// The third parameter is a callback function to be executed once the file is read.
fs.readFile(process.argv[2], 'utf8', function (error, content) {
  // If an error occurred during file reading or processing,
  // it will be captured here. If there's no error, 'error' will be null.
  if (error) {
    // Log the error to the console.
    console.error(error);
  } else {
    // If there's no error, log the content of the file to the console.
    console.log(content);
  }
});
