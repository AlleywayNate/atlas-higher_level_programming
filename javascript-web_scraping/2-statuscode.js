#!/usr/bin/node
const request = require('request');

// Extracting the URL to request from the command line arguments
const url = process.argv[2];

// Making an HTTP GET request to the specified URL
request(url, function (error, response) {
  // If there's no error and a response is received
  if (!error && response) {
    // Displaying the status code of the response
    console.log(`code: ${response.statusCode}`);
  } else {
    // If an error occurs or no response is received, display an error message
    console.error(error || 'No response received');
  }
});
