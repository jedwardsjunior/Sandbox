var zerorpc        = require("zerorpc");

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html');
  });

  app.get('/searchWiki', function(request, response) {
    var query = request.query.q;
    //console.log("The query is: ", query);

    // Python calls
    var client = new zerorpc.Client();
    client.connect("tcp://127.0.0.1:4242");
    client.invoke("wikisearch", query, function(error, res, more) {
        //console.log(res);
        response.send(res);
        //response.render("response", res);
    });

  });

  app.get('/searchWolfram', function(request, response) {
    var query = request.query.q;
    //console.log("The query is: ", query);

    // Python calls
    var client = new zerorpc.Client();
    client.connect("tcp://127.0.0.1:4242");
    client.invoke("wolframsearch", query, function(error, res, more) {
        //console.log(res);
        response.send(res);
        //response.render("response", res);
    });

  });

  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html');
  });

    // frontend routes =========================================================
    // route to handle all angular requests
};
