// Wait for the document to be fully loaded before executing the script
$(document).ready(function() {
  // Select the <div> element with ID red_header using jQuery
  $('#red_header').click(function() {
      // Update the text color of the <header> element to red (#FF0000)
      $('header').css('color', '#FF0000');
  });
});