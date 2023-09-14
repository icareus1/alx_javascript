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

    // For each task, check if it's completed and increments the task count for the respective user
    todos.forEach(todo => {
        if (todo.completed) {
            if (tasksCompleted[todo.userId]) {
                tasksCompleted[todo.userId]++;
            } else {
                tasksCompleted[todo.userId] = 1;
            }
        }
    });

    // Removes users with no completed tasks
    for (const userId in tasksCompleted) {
        if (tasksCompleted[userId] === 0) {
            delete tasksCompleted[userId];
        }
    }

    console.log(tasksCompleted);
});