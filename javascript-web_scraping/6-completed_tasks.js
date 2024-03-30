#!/usr/bin/node
// Importing the 'request' module.
const request = require('request');

// Making a request to the URL provided as a command-line argument (process.argv[2]).
// The callback function handles the response.
request(process.argv[2], function (error, response, body) {
  // If there's no error during the request, enter the block.
  if (!error) {
    // Parse the response body (which is in JSON format) to access its properties.
    const todos = JSON.parse(body);

    // Initialize an empty object to store the count of completed todos for each user.
    const completed = {};

    // Iterate over each todo item in the 'todos' array.
    todos.forEach((todo) => {
      // Check if the todo is completed and if the user ID is not yet recorded in the 'completed' object.
      if (todo.completed && completed[todo.userId] === undefined) {
        // If the user ID is not yet recorded, initialize the count to 1.
        completed[todo.userId] = 1;
      } else if (todo.completed) {
        // If the user ID is already recorded, increment the count by 1.
        completed[todo.userId] += 1;
      }
    });

    // After processing all todos, the 'completed' object contains the count of completed todos for each user.
    // Log the 'completed' object to the console, which shows the count of completed todos for each user.
    console.log(completed);
  }
});
