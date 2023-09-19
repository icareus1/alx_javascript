// Log to the console "Start of the execution queue"
console.log("Start of the execution queue");

// Schedule the final code block to be executed using setTimeout with delay of 0
setTimeout(() => {
  console.log("Final code block to be executed using setTimeout (with delay of 0)");
}, 0);

// Loop that iterates 100 times, each iteration logs to the console the iteration number
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// Log to the console "End of the loop printing"
console.log("End of the loop printing");
