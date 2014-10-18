module.exports = function(app) {

	var config = require('../config/db.js');
	var db = require('orchestrate')(config.db);
	var f = require('./functions.js');

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.get('/query', function(req, res) {
		var query = req.query.q;
		console.log("The query is: ", query);
		f.addQuery(query);
		res.redirect('/');

	});
};
