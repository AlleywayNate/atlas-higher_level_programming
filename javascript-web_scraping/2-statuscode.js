#!/usr/bin/node
// Importing the 'request' module.
const request = require('request');

// Making an HTTP GET request to the URL provided as a command line argument (process.argv[2]).
// This code fetches the resource specified by the URL.
// The 'response' event is emitted when a response is received.
// The callback function provided to 'on' handles the response.
request.get(process.argv[2]).on('response', function(response) {
  
  // Logging the status code of the response to the console.
  console.log(`code: ${response.statusCode}`);
});