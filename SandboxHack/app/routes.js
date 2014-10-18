module.exports = function(app) {

	var config         = require('../config/db.js');
	var db             = require('orchestrate')(config.db);
	var f              = require('./functions.js');


	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.get('/search', function(req, res) {
		var query = req.query.q;
		console.log("The query is: ", query);
		// Hacky way to get at the json stored in the db
		var result = f.addQuery(query);
		//res.redirect('/search_result?'+query);
		res.render('search-results',
							{"name" : query,
								"values" : result
							}
		);
	});

	/**
	app.get('/search_result/:id', function(req, res) {
		response.render('search-results', {
			name: query
		});
	})*/
};
