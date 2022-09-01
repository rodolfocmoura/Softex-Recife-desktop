console.log("Mano do financeriro");

var cliente = "Brother";

console.log("Cliente: "+cliente);

var valProduct = 100;
var valDiscount = 37;

var discountFunc = require("./modules/calDiscount");

var finalValue = discountFunc(valProduct,valDiscount)

console.log(finalValue);