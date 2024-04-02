# Javascript - Web JQuery

This project aims to reinforce the understanding of DOM manipulation with jQuery, a powerful JavaScript library commonly used in web development.

## Tests :heavy_check_mark:

* [tests](./tests): This directory contains HTML files used for testing the DOM manipulation scripts.

## Tasks :page_with_curl:

# 0. No jQuery
* [0-script.js](./0-script.js): This script updates the text color of the HTML tag `HEADER` to red (`#ff0`) using vanilla JavaScript with `document.querySelector`.
### Explanation of JavaScript Script

The provided JavaScript script manipulates the DOM to change the text color of the `<header>` element to red. Below is the line-by-line explanation:

1. `document.addEventListener('DOMContentLoaded', function () {`
   * This line adds an event listener to execute the provided function when the DOM content is fully loaded.

2. `const header = document.querySelector('header');`
   * This line selects the `<header>` element from the DOM using the `querySelector()` method. It retrieves the first element that matches the specified CSS selector 'header' and assigns it to the variable `header`.

3. `header.style.color = '#FF0000';`
   * This line changes the text color of the selected `<header>` element to red (#FF0000) by directly accessing its `style` property and setting the `color` CSS property to the desired value.

# 1. With jQuery
* [1-script.js](./1-script.js): This script achieves the same functionality as task 0 but uses jQuery instead of vanilla JavaScript.
### Explanation of JavaScript Script

The provided JavaScript script manipulates the DOM using jQuery to change the text color of the `<header>` element to red. Below is the line-by-line explanation:

1. `$(document).ready(function() {`
   * This line waits for the document to be fully loaded before executing the provided function.

2. `var headerElement = $('header');`
   * This line selects the `<header>` element using its tag name 'header' with the jQuery function `$()`. It retrieves the jQuery object representing the selected element and assigns it to the variable `headerElement`.

3. `headerElement.css('color', '#FF0000');`
   * This line updates the text color of the selected `<header>` element to red (#FF0000) using the `css()` method provided by jQuery. It sets the value of the 'color' CSS property to the specified color code '#FF0000'.


# 2. Click and turn red
* [2-script.js](./2-script.js): When the user clicks on the tag `DIV#red_header`, this script updates the text color of the HTML tag `HEADER` to red (`#ff0`) using jQuery.
### Explanation of JavaScript Script

The provided JavaScript script utilizes jQuery to manipulate the DOM, specifically to update the text color of the `<header>` element to red when the user clicks on the `<div>` element with the ID 'red_header'. Below is the line-by-line explanation:

1. `$(document).ready(function() {`
   * This line waits for the document to be fully loaded before executing the provided function.

2. `$('#red_header').click(function() {`
   * This line selects the `<div>` element with the ID 'red_header' using jQuery's selector syntax `$('#red_header')`. It then attaches a click event listener to this element using the `click()` method, which executes the provided function when the element is clicked.

3. `$('header').css('color', '#FF0000');`
   * This line updates the text color of the `<header>` element to red (#FF0000) using the `css()` method provided by jQuery. It selects the `<header>` element using the 'header' tag selector and sets the value of the 'color' CSS property to the specified color code '#FF0000'.


# 3. Add `.red` class
* [3-script.js](./3-script.js): This script adds the class `.red` to the HTML tag `HEADER` when the user clicks on the tag `DIV#red_header` using jQuery. This effectively changes the text color of the header to red.
### Explanation of JavaScript Script

The provided JavaScript script utilizes jQuery to manipulate the DOM, specifically to add the class 'red' to the `<header>` element when the user clicks on the `<div>` element with the ID 'red_header'. Below is the line-by-line explanation:

1. `$(document).ready(function() {`
   * This line waits for the document to be fully loaded before executing the provided function.

2. `$('#red_header').click(function() {`
   * This line selects the `<div>` element with the ID 'red_header' using jQuery's selector syntax `$('#red_header')`. It then attaches a click event listener to this element using the `click()` method, which executes the provided function when the element is clicked.

3. `$('header').addClass('red');`
   * This line adds the class 'red' to the `<header>` element using the `addClass()` method provided by jQuery. It selects the `<header>` element using the 'header' tag selector and adds the specified class to it.


# 4. Toggle classes
* [4-script.js](./4-script.js): When the user clicks on the tag `DIV#red_header`, this script toggles the class of the HTML tag `HEADER` between `.red` and `.green`. If the header already has the `.red` class, it will be removed and replaced with `.green`, and vice versa.
### Explanation of JavaScript Script

The provided JavaScript script utilizes jQuery to manipulate the DOM, specifically to toggle the classes 'red' and 'green' on the `<header>` element when the user clicks on the `<div>` element with the ID 'toggle_header'. Below is the line-by-line explanation:

1. `$(document).ready(function() {`
   * This line waits for the document to be fully loaded before executing the provided function.

2. `$('#toggle_header').click(function() {`
   * This line selects the `<div>` element with the ID 'toggle_header' using jQuery's selector syntax `$('#toggle_header')`. It then attaches a click event listener to this element using the `click()` method, which executes the provided function when the element is clicked.

3. `$('header').toggleClass('red');`
   * This line toggles the class 'red' on the `<header>` element using the `toggleClass()` method provided by jQuery. It selects the `<header>` element using the 'header' tag selector and toggles the specified class on it.

4. `$('header').toggleClass('green');`
   * This line toggles the class 'green' on the `<header>` element using the `toggleClass()` method provided by jQuery. It selects the `<header>` element using the 'header' tag selector and toggles the specified class on it.


# 5. List of elements
* [5-script.js](./5-script.js): This script adds a new list item `<li>Item</li>` to the unordered list `UL.my_list` whenever the user clicks on the tag `DIV#add_item`. This is accomplished using jQuery to manipulate the DOM.
### Explanation of JavaScript Script

The provided JavaScript script uses jQuery to manipulate the DOM, specifically to add a new `<li>` element to a list when the user clicks on the `<div>` element with the ID 'add_item'. Below is the line-by-line explanation:

1. `$(document).ready(function() {`
   * This line waits for the document to be fully loaded before executing the provided function.

2. `$('#add_item').click(function() {`
   * This line selects the `<div>` element with the ID 'add_item' using jQuery's selector syntax `$('#add_item')`. It then attaches a click event listener to this element using the `click()` method, which executes the provided function when the element is clicked.

3. `var newItem = $('<li>Item</li>');`
   * This line creates a new `<li>` element with the text 'Item' using jQuery's DOM manipulation methods. It utilizes the `$()` function to create a new jQuery object representing the `<li>` element with the specified text content.

4. `$('ul.my_list').append(newItem);`
   * This line selects the `<ul>` element with the class 'my_list' using jQuery's selector syntax `$('ul.my_list')`. It then appends the newly created `<li>` element (`newItem`) to the selected `<ul>` element using the `append()` method. This adds the new list item to the end of the list.


# 6. Change the text
* [6-script.js](./6-script.js): When the user clicks on the tag `DIV#update_header`, this script updates the text of the HTML tag `HEADER` to "New Header!!!" using jQuery. It effectively changes the header text to a new value.
### Explanation of JavaScript Script

The provided JavaScript script uses jQuery to manipulate the DOM, specifically to update the text content of the `<header>` element when the user clicks on the `<div>` element with the ID 'update_header'. Below is the line-by-line explanation:

1. `$(document).ready(function() {`
   * This line waits for the document to be fully loaded before executing the provided function.

2. `$('#update_header').click(function() {`
   * This line selects the `<div>` element with the ID 'update_header' using jQuery's selector syntax `$('#update_header')`. It then attaches a click event listener to this element using the `click()` method, which executes the provided function when the element is clicked.

3. `$('header').text('New Header!!!');`
   * This line selects the `<header>` element using jQuery's selector syntax `$('header')`. It then updates the text content of the selected `<header>` element to "New Header!!!" using the `text()` method. This replaces any existing text content within the `<header>` element with the specified text.


# 7. Star wars character
* [7-script.js](./7-script.js): This script fetches data from the Star Wars API `https://swapi-api.hbtn.io/api/people/5/?format=json` using jQuery. It then displays the character's name in the HTML tag `DIV#character`.
### Explanation of JavaScript Script

The provided JavaScript script fetches the character name from the Star Wars API `https://swapi-api.hbtn.io/api/people/5/?format=json` and displays it in the HTML tag `<div id="character">`.

1. `$(document).ready(function() {`
   * This line waits for the document to be fully loaded before executing the provided function.

2. `$.get('https://swapi-api.hbtn.io/api/people/5/?format=json', function(data) {`
   * This line initiates an AJAX GET request to the specified URL using jQuery's `$.get()` method. The second argument is a callback function that will be executed if the request is successful. The `data` parameter contains the response data.

3. `var characterName = data.name;`
   * This line extracts the character name from the fetched data. The `name` property of the `data` object contains the character's name.

4. `$('#character').text(characterName);`
   * This line updates the text content of the HTML tag `<div id="character">` with the extracted character name. The `text()` method of jQuery is used to set the text content.


# 8. Star Wars movies
* [8-script.js](./8-script.js): This script fetches data from the Star Wars API `https://swapi.co/api/films/?format=json` using jQuery. It then lists all movie titles in the HTML tag `UL#list_movies`.
### Explanation of JavaScript Script

The provided JavaScript script uses jQuery to fetch and list all movie titles from the Star Wars API `https://swapi-api.hbtn.io/api/films/?format=json`. Below is the line-by-line explanation:

1. `$(document).ready(function() {`
   * This line waits for the document to be fully loaded before executing the provided function.

2. `$.ajax({`
   * This line initiates an AJAX GET request using jQuery's `$.ajax()` method.

3. `url: 'https://swapi-api.hbtn.io/api/films/?format=json',`
   * This line specifies the URL of the API endpoint from which the movies data will be fetched.

4. `method: 'GET',`
   * This line specifies the HTTP method to be used for the AJAX request, which is GET in this case.

5. `success: function(response) {`
   * This line specifies the success callback function that will be executed if the AJAX request is successful. The `response` parameter contains the data returned from the API.

6. `$.each(response.results, function(index, movie) {`
   * This line uses jQuery's `$.each()` method to iterate over each movie object in the `results` array of the API response.

7. `var movieTitle = movie.title;`
   * This line extracts the title of the current movie from the `title` property of the movie object.

8. `var listItem = $('<li>').text(movieTitle);`
   * This line creates a new `<li>` element using jQuery and sets its text content to the extracted movie title.

9. `$('#list_movies').append(listItem);`
   * This line appends the newly created `<li>` element containing the movie title to the `<ul>` element with the ID 'list_movies' in the HTML document.


# 9. Say Hello!
* [9-script.js](./9-script.js): This script fetches data from the API `https://fourtonfish.com/hellosalut/?lang=fr` to get the translation of "Hello" in French. It then displays the translation in the HTML tag `DIV#hello`. This script demonstrates how to fetch and display dynamic data in a web page using jQuery.
  * It's important to note that this script works when imported in the `<head>` tag because it uses jQuery, which ensures that the script runs after the DOM is fully loaded.
### Explanation of JavaScript Script

The provided JavaScript script fetches the translation of "hello" in French from the specified URL `https://hellosalut.stefanbohacek.dev/?lang=fr` and displays it in the HTML tag `<div id="hello">`.

1. `$.ajax({`
   * This line initiates an AJAX GET request using jQuery's `$.ajax()` method. It specifies the URL to fetch the translation data from and the request method as 'GET'.

2. `url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',`
   * This line specifies the URL endpoint from which to fetch the translation data. The URL includes the query parameter `lang=fr` to specify French as the language for translation.

3. `method: 'GET',`
   * This line specifies the HTTP request method as 'GET' for retrieving data from the server.

4. `success: function(response) {`
   * This line defines a callback function to be executed if the AJAX request is successful. The `response` parameter contains the data returned by the server.

5. `var helloTranslation = response.hello;`
   * This line extracts the translation of "hello" from the response data. It accesses the `hello` property of the `response` object.

6. `$('#hello').text(helloTranslation);`
   * This line sets the text content of the HTML element with ID 'hello' to the extracted translation of "hello". It uses jQuery's `text()` method to update the text content of the specified element.


---