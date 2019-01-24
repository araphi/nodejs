var http = require('http')
var fs = require('fs')
 http.createServer(function(req, res){
   fs.readFile('ukinode.txt',function(err,data){
     res.writeHead(200, {'Content-type': 'text/html'});
     res.write("Welcome to uki, I'm Araphi");
     res.write(data);
     res.end();
   });
 }).listen(8000)
