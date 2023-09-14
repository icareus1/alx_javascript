#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
    console.error('Usage: node 5-starwars_characters.js <movie_id>');
    process.exit(1);
}

// Get the movie ID from the command line argument
const movieId = process.argv[2];

// Create the API URL by concatenating the movie ID with the API base URL
const url = `https://swapi.dev/api/films/${movieId}/`;

request(url, (error, response, body) => {
    if (error) {
        console.error(error.message);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error(response.statusCode);
        process.exit(1);
    }

    // Parse the JSON response
    const movieData = JSON.parse(body);

    // Extract the character URLs from the movie data
    const characterUrls = movieData.characters;

    // Loop through the character URLs
    characterUrls.forEach(characterUrl => {
        // Make a GET request to the character URL
        req.get(characterUrl, (error, response, body) => {
            if (error) {
                console.error(error.message);
                process.exit(1);
            }

            if (response.statusCode !== 200) {
                console.error(response.statusCode);
                process.exit(1);
            }
                // Parse the JSON response
            const characterData = JSON.parse(body);

                // Extract the character name
            const characterName = characterData.name;

                // Print the character name
            console.log(characterName);
        });
    });
});