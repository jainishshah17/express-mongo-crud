var express = require('express');
var app = express();
var ObjectId = require('mongodb').ObjectId;

// HEALTH CHECK FOR APPLICATION
app.get('/', function(req, res, next) {	
		res.sendStatus(200);
});

module.exports = app;
