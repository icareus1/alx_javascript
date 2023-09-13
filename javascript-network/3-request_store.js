#!usr/bin/node
const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
    console.error('Usage: node 3-request_store.js <URL> <outputFilePath>');
    process.exit(1);
}

const url = process.argv[2];
const outputPath = process.argv[3];

request(url, (error, response, body) => {
    if (error) {
        console.error(error.message);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error(response.statusCode);
        process.exit(1);
    }

    // Write the body response to the specified file
    fs.writeFile(outputPath, body, 'utf-8', (err) => {
        if (err) {
            console.error(err.message);
            process.exit(1);
        }
        console.log(`Webpage content successfully saved to ${outputPath}`);
    });
});
