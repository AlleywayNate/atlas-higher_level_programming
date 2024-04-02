// Perform an AJAX GET request to fetch the translation data
$.ajax({
  url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
  method: 'GET',
  success: function(response) {
      // Extract the translation of "hello" from the response
      var helloTranslation = response.hello;
      // Set the text content of the <div> with ID 'hello' to the translation
      $('#hello').text(helloTranslation);
  }
});
