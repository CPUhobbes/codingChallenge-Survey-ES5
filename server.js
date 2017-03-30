// Dependencies
var express = require('express');
var Routes = require('./config/routes.js');
var BodyParser = require('body-parser');
var Promise = require('bluebird');
var Path = require('path');

// Express
var app = express();

// Add Body Parser
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

// Add static content directory (img, css, js, etc)
app.use(express.static(Path.join(__dirname, 'public')));

// Routes
app.use('/', Routes);

// Listen on port 3000
app.listen(process.env.PORT || 3000, function () {
	console.log('App running on port 3000!');
});

module.exports = app;
