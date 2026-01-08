var http = require('http'); //modulo padrao do node

http.createServer(function(req, res){
    res.end("Hello Wolrd! Welcome to my website!");
}).listen(8081); //cria um servidor http e define a porta

console.log("O Servidor está rodando!");


