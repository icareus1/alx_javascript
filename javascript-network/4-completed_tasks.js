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
    const tasksCompleted = {};

    todos.forEach(todo => {
        if (todo.completed) {
            if (tasksCompleted[todo.userId]) {
                tasksCompleted[todo.userId]++;
            } else {
                tasksCompleted[todo.userId] = 1;
            }
        }
    });

    for (const userId in tasksCompleted) {
        console.log(`${userId}: ${tasksCompleted[userId]}`);
    }
});