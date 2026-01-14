const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', { //MODELS no Sequeliza são Tabelas
    titulo: { //COLUNAS
        type: Sequelize.STRING //limite de caracteres
    },
    conteudo: { //COLUNAS
        type: Sequelize.TEXT //ilimitado
    }
})

Postagem.create({ //como criar uma nova postagem
    titulo: "UM TITULO QUALQUER",
    conteudo: "jkdsjjdksjkdskdskdsj"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Victor",
    sobrenome: "Lima",
    idade: 18,
    email: "victor@gmail.com"
})
