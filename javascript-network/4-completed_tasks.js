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
        if (todo.completed) {
            if (completedTasksByUser[todo.userId]) {
                completedTasksByUser[todo.userId]++;
            } else {
                completedTasksByUser[todo.userId] = 1;
            }
        }
    });

    // Print the number of completed tasks for each user
    for (const userId in completedTasksByUser) {
        console.log(`${userId}: ${completedTasksByUser[userId]}`);
    }
});