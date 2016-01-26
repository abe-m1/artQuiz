//load the express package and create our app

var express = require('express');
var app = express();

app.use ( express.static( 'public') )

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');

  
});

//start the server
app.listen(1337);
console.log('on port 1337')