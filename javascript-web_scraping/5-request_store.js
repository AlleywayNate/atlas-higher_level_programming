#!/usr/bin/node
// Importing the fs (file system) module to work with files
const fs = require('fs');

// Importing the request module to make HTTP requests
const request = require('request');

// Retrieving the URL from the command line arguments
const url = process.argv[2];

// Retrieving the file path from the command line arguments
const filePath = process.argv[3];

// Making an HTTP GET request to the specified URL
request(url, function(error, response, body) {
  // Checking if an error occurred during the request
  if (error) {
    // If an error occurred, printing the error to the console
    console.error(error);
  } else {
    // Writing the body response to the specified file path
    fs.writeFile(filePath, body, 'utf-8', function(err) {
      // Checking if an error occurred while writing to the file
      if (err) {
        // If an error occurred, printing the error to the console
        console.error(err);
      } else {
        // If no error occurred, printing a success message
        console.log(`The contents of the webpage have been stored in ${filePath}`);
      }
    });
  }
});
