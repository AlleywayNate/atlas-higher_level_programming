// Wait for the document to be fully loaded before executing the script
$(document).ready(function() {
  // Attach a click event handler to the <div> element with ID add_item
  $('#add_item').click(function() {
      // Create a new <li> element with the text 'Item'
      var newItem = $('<li>Item</li>');
      // Append the new <li> element to the <ul> element with class my_list
      $('ul.my_list').append(newItem);
  });
});
