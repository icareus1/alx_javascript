#!usr/bin/node
const req = require('request');

if (process.argv.length !== 3) {
    console.error('Usage: node 4-completed_tasks.js <url>');
    process.exit(1);
}

const url = process.argv[2];

req.get(url, (error, response, body) => {
    if (error) {
        console.error(error.message);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error(response.statusCode);
        process.exit(1);
    }
    const tasks = JSON.parse(body);

    // Create a dictionary to store the count of completed tasks for each user
    const completedTask = {};

    // Loop through the tasks and count the completed tasks for each user
    tasks.forEach(task => {
      const userId = task.userId;
      const completed = task.completed;

      if (completed) {
        if (completedTask[userId]) {
          completedTask[userId]++;
        } else {
          completedTask[userId] = 1;
        }
      }
    });

    // Print the dictionary with completed tasks by user
    console.log(completedTask);
});