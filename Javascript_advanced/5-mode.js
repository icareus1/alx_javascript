function changeMode(size, weight, transform, background, color) {
  // Create a closure that returns a CSS style object
  function getStyle() {
    return {
      fontSize: size + 'px',
      fontWeight: weight,
      textTransform: transform,
      backgroundColor: background,
      color: color,
    };
  }

  // Set the document's style element to the closure's return value
  document.documentElement.style = getStyle();
}

 function main() {
  // Set three variables that pass different arguments to the changeMode function
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  // Add a paragraph to the body of the page with the text "Welcome Holberton!"
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  // Add three buttons to the body of the page with the text "Spooky", "Dark mode", and "Scream mode"
  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  document.body.appendChild(spookyButton);

  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Dark mode';
  document.body.appendChild(darkModeButton);

  const screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream mode';
  document.body.appendChild(screamModeButton);

  // Add event listeners to the buttons so that they call the corresponding changeMode function when clicked
  spookyButton.addEventListener('click', spooky);
  darkModeButton.addEventListener('click', darkMode);
  screamModeButton.addEventListener('click', screamMode);
}

// Call the main function to set up the page
main();
