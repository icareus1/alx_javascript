// Create a function named `divideBy` that takes a number as an argument and returns a function that takes another number as an argument and returns the second number divided by the first number.
function divideBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber / firstNumber;
  };
}

// Create a function named `addBy` that takes a number as an argument and returns a function that takes another number as an argument and returns the sum of the two numbers.
function addBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber + firstNumber;
  };
}

// Create four closures that use the `divideBy` and `addBy` functions.
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

// Execute the following code:
console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
