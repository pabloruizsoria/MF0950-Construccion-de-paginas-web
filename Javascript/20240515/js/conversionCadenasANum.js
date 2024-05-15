//Entradas simuladas
var entrada1 = "6";
var entrada2 = "151";
var entrada3 = "3.6446";
var entrada4 = "Hola a todos";

//Mostramos el tipo de dato de cada variable
console.log("typeof entrada1: " + typeof entrada1);
console.log("typeof entrada2: " + typeof entrada2);
console.log("typeof entrada3: " + typeof entrada3);
console.log("typeof entrada4: " + typeof entrada4);

// Convertir una cadena de texto en entero
console.log(" -------------- ");
var numEntrada1 = parseInt(entrada1);
console.log(numEntrada1);
console.log("typeof numEntrada1: " + typeof numEntrada1);

var numEntrada2 = parseInt(entrada2);
console.log(numEntrada2);
console.log("typeof numEntrada2: " + typeof numEntrada2);

var numEntrada3 = parseInt(entrada3);
console.log(numEntrada3);
console.log("typeof numEntrada3: " + typeof numEntrada3);

var numEntrada4 = parseInt(entrada4);
console.log(numEntrada4); // NaN: Not a Number
console.log("typeof numEntrada4: " + typeof numEntrada4);

// Convertir una cadena de texto en decimal
console.log(" -------------- ");
var numEntrada1 = parseFloat(entrada1);
console.log(numEntrada1);
console.log("typeof numEntrada1: " + typeof numEntrada1);

var numEntrada2 = parseFloat(entrada2);
console.log(numEntrada2);
console.log("typeof numEntrada2: " + typeof numEntrada2);

var numEntrada3 = parseFloat(entrada3);
console.log(numEntrada3);
console.log("typeof numEntrada3: " + typeof numEntrada3);

var numEntrada4 = parseFloat(entrada4);
console.log(numEntrada4); // NaN: Not a Number
console.log("typeof numEntrada4: " + typeof numEntrada4);

//
console.log(" -------------- ");
var num1 = 500;
var num2 = 550;

var res1 = num1 / 100;
var res2 = num1 / 100.0;

var res3 = num2 / 100;
var res4 = num2 / 100.0;
console.log("res1: " + res1);
console.log("res2: " + res2);
console.log("res3: " + res3);
console.log("res4: " + res4);

console.log("typeof res1: " + typeof res1);
console.log("typeof res2: " + typeof res2);
console.log("typeof res3: " + typeof res3);
console.log("typeof res4: " + typeof res4);


/*
/100
/100.00
*/