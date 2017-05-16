const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./server/src/routes');

var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

// Parsers for POST data
app.use(upload.single('image'));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/', routes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () {
    console.log(`App running on localhost:${port}`)
});
server.on('error', (err) => {
    console.error("ERROR: " + err);
    return -1;
});