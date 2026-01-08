//No Node.js, módulos servem pra dividir código e controlar o que entra e o que sai de cada arquivo.

var SomaFunc = require("./somar") //função para importar modulo
var SubFunc = require("./subtrair")
var multiFunc = require("./multiplicar")



console.log(SomaFunc(2, 3))
console.log(SubFunc(10, 5))
console.log(multiFunc(100, 10))