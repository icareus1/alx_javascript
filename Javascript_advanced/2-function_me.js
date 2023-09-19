function welcomeMessage(fullName) {
  // This function is a closure because it has access to the local variable `fullName`.
  function alertWelcomeMessage() {
    alert(`Welcome ${fullName}!`);
  }
  return alertWelcomeMessage;
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');

guillaume();
alex();
fred();