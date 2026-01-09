const express = require("express");
const app = express(); //essa função faz uma cópia inteira do framework para dentro da variavel app

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!")
});

app.get("/sobre", function(req, res){
    res.send("Minha página sobre")
})

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
})

app.get('/ola/:nome/:cargo', function(req, res){ //eu consigo receber os parametros fornecidos em formato json
    res.send("Olá " + req.params.nome + "Seu cargo é: " + req.params.cargo + "Sua cor favorita é " + req.params.cor); // a função send só pode ser enviado uma única vez
})


app.listen(8081, function(){ //função de callback
    console.log("Servidor Rodando na url http://localhost:8081")
}); //essa função tem que ser a última linha do código

//calback -> função que é executado quando algum evento acontece