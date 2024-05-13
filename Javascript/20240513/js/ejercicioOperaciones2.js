var a = prompt("Introduce un número");
var b = prompt("Introduce otro número");
var operacion = prompt("¿Qué operación hago con ellos?");

console.log("a: " + a);
console.log("b: " + b);
console.log("operacion: " + operacion);

if( operacion == "+" ){
    var suma = a + b;
    console.log("suma (contatenación): " + suma);
}else if( operacion == "-" ){
    var resta = a - b;
    console.log("resta: " + resta);
}else if( operacion == "*" ){
    var multiplicacion = a * b;
    console.log("multiplicacion: " + multiplicacion);
}else if( operacion == "/" ){
    var division = a / b;
    console.log("division: " + division);
}else if( operacion == "%" ){
    var resto = a % b;
    console.log("resto: " + resto);
}else{
    console.log("Operador no contemplado");
}