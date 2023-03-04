const {consultarCep} = require('correios-brasil');
const cep = '50750350';
consultarCep(cep).then(response =>{console.log(response);});