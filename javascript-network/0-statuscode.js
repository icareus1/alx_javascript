#!usr/bin/node
const req = require('request');

if (process.argv.length !== 3) {
    console.error('Usage: node 0-statuscode.js <url>');
    process.exit(1);
}

const url = process.argv[2];

req.get(url, (error, response) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

    console.log(`code: ${response.statusCode}`)
});