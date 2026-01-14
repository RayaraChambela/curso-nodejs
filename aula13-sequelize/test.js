const Sequelize = require ('sequelize')
const sequelize = new Sequelize('test', 'root', '', {
    host: "localhost",
    port: 3307,
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){ //se der certo chama then
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)//se der errado chama catch
})