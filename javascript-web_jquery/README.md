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


### 2. Click and turn red
* [2-script.js](./2-script.js): When the user clicks on the tag `DIV#red_header`, this script updates the text color of the HTML tag `HEADER` to red (`#ff0`) using jQuery.

### 3. Add `.red` class
* [3-script.js](./3-script.js): This script adds the class `.red` to the HTML tag `HEADER` when the user clicks on the tag `DIV#red_header` using jQuery. This effectively changes the text color of the header to red.

### 4. Toggle classes
* [4-script.js](./4-script.js): When the user clicks on the tag `DIV#red_header`, this script toggles the class of the HTML tag `HEADER` between `.red` and `.green`. If the header already has the `.red` class, it will be removed and replaced with `.green`, and vice versa.

### 5. List of elements
* [5-script.js](./5-script.js): This script adds a new list item `<li>Item</li>` to the unordered list `UL.my_list` whenever the user clicks on the tag `DIV#add_item`. This is accomplished using jQuery to manipulate the DOM.

### 6. Change the text
* [6-script.js](./6-script.js): When the user clicks on the tag `DIV#update_header`, this script updates the text of the HTML tag `HEADER` to "New Header!!!" using jQuery. It effectively changes the header text to a new value.

### 7. Star wars character
* [7-script.js](./7-script.js): This script fetches data from the Star Wars API `https://swapi.co/api/people/5/?format=json` using jQuery. It then displays the character's name in the HTML tag `DIV#character`.

### 8. Star Wars movies
* [8-script.js](./8-script.js): This script fetches data from the Star Wars API `https://swapi.co/api/films/?format=json` using jQuery. It then lists all movie titles in the HTML tag `UL#list_movies`.

### 9. Say Hello!
* [9-script.js](./9-script.js): This script fetches data from the API `https://fourtonfish.com/hellosalut/?lang=fr` to get the translation of "Hello" in French. It then displays the translation in the HTML tag `DIV#hello`. This script demonstrates how to fetch and display dynamic data in a web page using jQuery.
  * It's important to note that this script works when imported in the `<head>` tag because it uses jQuery, which ensures that the script runs after the DOM is fully loaded.

---

## Detailed Line-by-Line Explanation:

### 0. No jQuery

```javascript
const header = document.querySelector('header');
header.style.color = '#ff0';