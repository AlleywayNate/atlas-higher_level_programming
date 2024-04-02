// Wait for the document to be fully loaded before executing the script
$(document).ready(function() {
  // Attach a click event handler to the <div> element with ID update_header
  $('#update_header').click(function() {
      // Select the <header> element and update its text to "New Header!!!"
      $('header').text('New Header!!!');
  });
});
