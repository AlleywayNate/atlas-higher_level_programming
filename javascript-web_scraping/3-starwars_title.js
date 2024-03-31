#!/usr/bin/node
const request = require('request');

// Function to retrieve and print the title of the Star Wars movie
function getStarWarsMovieTitle (movieId) {
  // Make a GET request to the Star Wars API endpoint with the provided movie ID
  request(`https://swapi-api.hbtn.io/api/films/${movieId}`, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // Parse the response body to extract the movie title
      const movieData = JSON.parse(body);
      const movieTitle = movieData.title;
      // Print the title of the movie
      console.log(movieTitle);
    } else {
      // Print an error message if there was an error or if the response status code is not 200
      console.error('Error:', error || `Status Code: ${response.statusCode}`);
    }
  });
}

// Check if a movie ID is provided as a command-line argument
if (process.argv.length !== 3 || isNaN(parseInt(process.argv[2]))) {
  console.error('Usage: node 3-starwars_title.js <movieId>');
} else {
  // Get the movie ID from the command-line arguments
  const movieId = parseInt(process.argv[2]);
  // Call the function to retrieve and print the movie title
  getStarWarsMovieTitle(movieId);
}
