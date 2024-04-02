// Wait for the document to be fully loaded before executing the script
$(document).ready(function() {
  // Select the <div> element with ID toggle_header using jQuery
  $('#toggle_header').click(function() {
      // Toggle the class 'red' on the <header> element
      $('header').toggleClass('red');
      // Toggle the class 'green' on the <header> element
      $('header').toggleClass('green');
  });
});
