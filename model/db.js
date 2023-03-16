const Sequelize = require('sequelize');

const sequelize = new Sequelize('celke', 'root', '3426', { 
    host: 'localhost',
    port: '3308',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
});



module.exports = sequelize;
