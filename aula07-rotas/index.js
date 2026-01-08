const express = require("express");
const app = express(); //essa função faz uma cópia inteira do framework para dentro da variavel app

app.listen(8081); //essa função tem que ser a última linha do código

//calback -> função que é executado quando algum evento acontece