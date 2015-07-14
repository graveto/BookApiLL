var express = require("express");

var app = express();

app.get("/", function(req, res) {
  // res.send("Hellooooooo");
  res.json({
    name: "Jim",
    game: "node"
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("running on " + port);
});


