/*

function suma(sumando1, sumando2) {
    var dato1 = parseInt(sumando1);
    var dato2 = parseInt(sumando2);

    var resultado = dato1 + dato2;

    console.log("El resultado de la suma es: " + resultado);
}

var a = prompt("Indica un sumando");
var b = prompt("Indica otro sumando");
suma(a, b);

var c = prompt("Indica un sumando");
var d = prompt("Indica otro sumando");
suma(c, d);

var e = prompt("Indica un sumando");
var f = prompt("Indica otro sumando");
suma(e, f);

var g = 5;
var h = 6;

suma(g, h);

*/

function devuelveCinco(){
    return 5;
}

function sinSentido() {
    console.log("Hola, soy una función sin sentido");
}

sinSentido();
sinSentido();
sinSentido();

var a = devuelveCinco();
console.log(a);
sinSentido();
console.log(a);