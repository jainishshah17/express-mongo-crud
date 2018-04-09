var express = require('express')
var app = express()
var ObjectId = require('mongodb').ObjectId

// HEALTH CHECK FOR APPLICATION
app.get('/', function(req, res, next) {	
	// fetch and sort users collection by id in descending order
	req.db.collection('users').find().sort({"_id": -1}).toArray(function(err, result) {
		res.sendStatus(200);
	})
});

module.exports = app
