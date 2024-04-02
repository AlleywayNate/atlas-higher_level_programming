// Wait for the document to be fully loaded before executing the script
$(document).ready(function() {
  // Perform an AJAX GET request to fetch the character data
  $.get('https://swapi-api.hbtn.io/api/people/5/?format=json', function(data) {
      // Extract the character name from the fetched data
      var characterName = data.name;
      // Update the text content of the <div> element with ID 'character'
      $('#character').text(characterName);
  });
});
