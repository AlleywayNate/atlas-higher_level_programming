#!/usr/bin/node
// Importing the 'request' module.
const request = require('request');

// Making a request to the URL provided as a command-line argument (process.argv[2]).
// The callback function handles the response.
request(process.argv[2], function (error, response, body) {
  // If there's no error during the request, enter the block.
  if (!error) {
    // Parse the response body (which is in JSON format) to access its properties.
    const results = JSON.parse(body).results;

    // The 'results' array contains information about Star Wars movies.
    // We want to count the number of movies in which the character with ID 18 (i.e., Anakin Skywalker) appears.
    // We use the reduce() function to iterate over each movie in the 'results' array and accumulate the count.
    console.log(results.reduce((count, movie) => {
      // For each movie, we check if any character's ID ends with '/18/', which indicates the character is Anakin Skywalker.
      // If such a character is found, we increment the count by 1.
      // We use the find() method to search for the character with the specified ID.
      return movie.characters.find((character) => character.endsWith('/18/'))
        ? count + 1
        : count;
    }, 0));
    // The count is initially set to 0. If Anakin Skywalker is found in any movie, the count increases by 1.
    // Finally, the total count of movies featuring Anakin Skywalker is logged to the console.
  }
});
