// create web server
// create a route for comments
// read the comments.json file
// respond with the comments JSON

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', (err, data) => {
        if (err) {
            res.status(500).send('There was an error reading the comments file');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});