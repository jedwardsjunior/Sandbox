'use strict';

// The Package is past automatically as first parameter
module.exports = function(Homepage, app, auth, database) {

  app.get('/homepage/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/homepage/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/homepage/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/homepage/example/render', function(req, res, next) {
    Homepage.render('index', {
      package: 'homepage'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
