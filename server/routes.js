var zerorpc        = require("zerorpc");

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes




  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
  });

  app.get('/search', function(request, response) {
    var query = request.query.q;
    console.log("The query is: ", query);

    // Python calls
    var client = new zerorpc.Client();
    client.connect("tcp://127.0.0.1:4242");
    client.invoke("wikisearch", query, function(error, res, more) {
        response.send(res);
    });

  });
};
