// Wait for the document to be fully loaded before executing the script
$(document).ready(function() {
  // Perform an AJAX GET request to fetch the movies data
  $.ajax({
      url: 'https://swapi-api.hbtn.io/api/films/?format=json',
      method: 'GET',
      success: function(response) {
          // Loop through each movie in the fetched data
          $.each(response.results, function(index, movie) {
              // Extract the title of the current movie
              var movieTitle = movie.title;
              // Create a new <li> element to represent the movie title
              var listItem = $('<li>').text(movieTitle);
              // Append the <li> element to the <ul> with ID 'list_movies'
              $('#list_movies').append(listItem);
          });
      }
  });
});
