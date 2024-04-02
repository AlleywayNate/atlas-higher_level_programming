// Wait for the document to be fully loaded before executing the script
$(document).ready(function() {
  // Select the <div> element with ID red_header using jQuery
  $('#red_header').click(function() {
      // Add the class 'red' to the <header> element
      $('header').addClass('red');
  });
});
