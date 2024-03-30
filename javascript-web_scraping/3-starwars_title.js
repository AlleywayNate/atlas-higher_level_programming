#!/usr/bin/node
// Importing the 'request' module.
const request = require('request');

// Constructing the URL to make a request to the Star Wars API (SWAPI) for film information.
const url = 'http://swapi.co/api/films/' + process.argv[2];

// Making a request to the constructed URL.
// The callback function handles the response.
request(url, function (error, response, body) {
  // If there's an error during the request, it will be captured here.
  // Otherwise, 'error' will be null.
  if (error) {
    console.log(error); // Log the error to the console.
  } else {
    // Parse the response body (which is in JSON format) to access its properties.
    // In this case, we're interested in the 'title' property of the film.
    // 'body' contains the response body as a string, so we parse it into a JavaScript object using JSON.parse().
    console.log(error || JSON.parse(body).title);
    // The above line checks if there was an error during parsing, and if not, it logs the title of the film to the console.
  }
});
