const Sequelize = require('sequelize')

// Conexão com o banco de dados MySql
    const sequelize = new Sequelize('postapp', 'root', '', {
        host: 'localhost',
        port: 3307,
        dialect: 'mysql'
    })

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }