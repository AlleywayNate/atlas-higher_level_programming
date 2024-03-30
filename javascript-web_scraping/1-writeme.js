#!/usr/bin/node
// The first line specifies the shebang (#!) for the script to be executed by Node.js.
// It tells the operating system to use Node.js to interpret this script.

// Importing the 'fs' module (file system) from the Node.js standard library.
const fs = require('fs');

// Writing to a file asynchronously.
// process.argv is an array containing the command line arguments passed when the Node.js process was launched.
// process.argv[2] contains the path of the file to write to.
// process.argv[3] contains the content to write to the file.
// The third parameter is a callback function to be executed once the writing operation is complete or encounters an error.
fs.writeFile(process.argv[2], process.argv[3], error => {

  // If an error occurred during file writing,
  // it will be captured here. If there's no error, 'error' will be null.
  if (error) {
    // Log the error to the console.
    console.log(error);
  }
});