var http = require('http');
var upperCase = require('upper-case')

http.createServer(function (req,res){
  res.write(upperCase('Uki is the best place to learn programming!'));
  res.end();
}).listen(8080);
