const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser"); // Não se usa mais
const Post = require('./models/Post')


//Config
    // Template Engine
        app.engine('handlebars', engine({defaultLayout: "main"})) 
        app.set("view engine", "handlebars")
    // 
        app.use(express.urlencoded({extended:false}))
        app.use(express.json())

    // Rotas

        app.get('/', function(req, res){
            Post.findAll({ raw: true }).then(function(posts){
                console.log(posts)
                res.render('home', {posts: posts})
            })
        })

        app.get('/cad', function(req, res){
            res.render('formulário')
        })

        app.post('/add', function (req, res){
            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(function(){ //se deu certo 
                res.redirect('/')
            }).catch(function(erro){ //se deu errado
                res.send("Houve um erro: " + erro)
            })
        })

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
})

//Quando usa um GET no formulário, os dados são enviados pela URL, enquanto o POST envia os dados no corpo da requisição, proporcionando mais segurança e capacidade para enviar informações maiores.

//Tanto é que você só consegue acessar rotas do tipo GET diretamente pelo navegador, enquanto rotas do tipo POST precisam ser acionadas por formulários ou requisições específicas.

//res.send(`Texto: ${req.body.titulo} Conteudo: ${req.body.conteudo} `) //req.body.conteudo -> Consigo pegar os dados enviados pelo formulário