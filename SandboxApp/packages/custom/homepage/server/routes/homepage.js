'use strict';

// The Package is past automatically as first parameter
module.exports = function(Homepage, app, auth, database) {

  app.get('/homepage/example/render', function(req, res, next) {
    Homepage.render('index', {
      package: 'homepage'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
