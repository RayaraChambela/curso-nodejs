const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const Sequelize = require('sequelize')

//Config
    // Template Engine
        app.engine('handlebars', engine({defaultLayout: "main"})) 
        app.set("view engine", "handlebars")
    // Conexão com o banco de dados MySql
        const sequelize = new Sequelize('test', 'root', '', {
            host: 'localhost',
            port: 3307,
            dialect: 'mysql'
        })
    // Rotas

        app.get('/cad', function(req, res){
            res.render('formulário')
        })

        app.post('/add', function (req, res){
            res.send('FORMULÁRIO RECEBIDO!')
        })

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
})