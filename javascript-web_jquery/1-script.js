// Wait for the document to be fully loaded before executing the script
$(document).ready(function() {
    // Select the <header> element using its tag name
    var headerElement = $('header');
    
    // Update the text color of the <header> element to red (#FF0000)
    headerElement.css('color', '#FF0000');
});