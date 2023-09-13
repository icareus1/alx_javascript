#!usr/bin/node
const req = require('request');

if (process.argv.length !== 3) {
    console.error('Usage: node 2-starwars_count.js <url>');
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

    const films = JSON.parse(body).results;

    const count = films.filter((film) =>
        film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    );

    console.log(count.length);
});