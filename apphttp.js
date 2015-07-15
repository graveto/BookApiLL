var http = require("http");

var app = http.createServer(function(req, res) {
  if(req.url === "/") {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(req.url);
  }else if(req.url === "/foo/") {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(req.url);
  }else{
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end("No known path");
  }
});

var port = 3333;

app.listen(port, function(){
  console.log("running on " + port);
});
