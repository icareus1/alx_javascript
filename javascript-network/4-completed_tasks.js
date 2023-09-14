#!usr/bin/node
const request = require('request');

const url = 'https://jsonplaceholder.typicode.com/todos';

request(url, (error, response, body) => {
    if (error) {
        console.error(error.message);
        return;
    }

    if (response.statusCode !== 200) {
        console.error(response.statusCode);
        return;
    }

    const todos = JSON.parse(body);

    // Create an object to store the count of completed tasks for each user ID
    const completedTasksByUser = {};

    // Iterate through the todos and count completed tasks for each user
      todos.forEach((todo) => {
        const userId = todo.userId.toString(); // Convert userId to string
        if (todo.completed) {
            if (completedTasksByUser[userId]) {
                completedTasksByUser[userId]++;
            } else {
                completedTasksByUser[userId] = 1;
            }
        }
    });

    // Print the result as a JSON object
    console.log(JSON.stringify(completedTasksByUser));
});