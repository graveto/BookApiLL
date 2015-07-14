var http = require("http");

var app = http.createServer(function(req, res) {
  if(req.url === "/") {
    res.end(req.url);
  }else if(req.url === "/foo/") {
    res.end(req.url);
  }else{
    res.end("No know path");
  }
}).listen(3333);
