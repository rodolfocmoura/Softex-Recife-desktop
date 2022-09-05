const Sequelize = require ('sequelize');
const sequelize = new Sequelize ('nomedobanco', 'usuario','senha'),{dialect:'mysql'host:'localhost'};

module.exports=sequelize;

var conexao =  connection.authenticate().then(function(){
    console.log("Conexão ok!");
}).catch(function(error){
    console.log('O seguinte erro ocorreu: '+ error);
});

