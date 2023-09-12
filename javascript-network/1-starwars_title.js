#!usr/bin/node
const req = require("request");

if (process.argv.length !== 3) {
  console.error("Usage: node 1-starwars_title.js <url>");
  process.exit(1);
}

const movieID = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

req.get(url, (error, res, body) => {
    if (error) {
      console.error(error.message);
      process.exit(1);
    }

    if (res.statusCode !== 200) {
      console.error(`Status code: ${res.statusCode}`);
      process.exit(1);
    }

    const movieData = JSON.parse(body);

    console.log(movieData.title);
});
