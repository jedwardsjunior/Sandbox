var zerorpc        = require("zerorpc");

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  app.get('/wiki/search/:id', function(req, res) {
    console.log("Wiki!");
    var query = req.params.id;
    console.log(query);

    // Python calls
    var client = new zerorpc.Client();
    client.connect("tcp://127.0.0.1:4242");
    client.invoke("wikisearch", query, function(error, response, more) {
        res.send(response);
    });
  });

  app.get('/wolfram/search/:id', function(req, res) {
    console.log("Wolfram!");
    var query = req.params.id;
    console.log(query);

    // Python calls
    var client = new zerorpc.Client();
    client.connect("tcp://127.0.0.1:4242");
    client.invoke("wolframsearch", query, function(error, response, more) {
        res.send(response);
    });
  });

  app.get('/about', function(req, res) {
    res.sendfile('./public/views/about.html');
  });

  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html');
  });

    // frontend routes =========================================================
    // route to handle all angular requests
};
