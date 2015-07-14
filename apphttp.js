var http = require("http");

var app = http.createServer(function(req, res) {
  if(req.url === "/") {
    res.end(req.url);
  }else if(req.url === "/foo/") {
    res.end(req.url);
  }else{
    res.end("No known path");
  }
});

var port = 3333;

app.listen(port, function(){
  console.log("running on " + port);
});
