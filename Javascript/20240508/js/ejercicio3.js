// Pedimos el 1er dato de entrada
var entrada1 = prompt("Introduce un número entre 1 y 10 incluídos");

// Comprobamos si el número es menor que 1
if(entrada1 < 1){
    console.log("El dato introducido es menor que 1. No es válido");
}
// Comprobamos si el número es mayor que 10
if(entrada1 > 10){
    console.log("El dato introducido es mayor que 10. No es válido");
}
// Pedimos el 2ndo dato de entrada
var entrada2 = prompt("Introduce un número entre 1 y 10 incluídos");

// Comprobamos si el número es menor que 1
if(entrada2 < 1){
    console.log("El dato introducido es menor que 1. No es válido");
}
// Comprobamos si el número es mayor que 10
if(entrada2 > 10){
    console.log("El dato introducido es mayor que 10. No es válido");
}
// Comparaciones
/*
if( entrada1 > entrada2 ){
    console.log("entrada1 ("+entrada1+") es mayor que entrada2 (" + entrada2 + ")");
}
if( entrada1 < entrada2 ){
    console.log("entrada1 ("+entrada1+") es menor que entrada2 (" + entrada2 + ")");
}
if( entrada1 == entrada2 ){
    console.log("entrada1 ("+entrada1+") es igual que entrada2 (" + entrada2 + ")");
}
*/
if( entrada1 > entrada2 ){
    console.log("entrada1 ("+entrada1+") es mayor que entrada2 (" + entrada2 + ")");
}else if( entrada1 < entrada2 ){
    console.log("entrada1 ("+entrada1+") es menor que entrada2 (" + entrada2 + ")");
}else if( entrada1 == entrada2 ){
    console.log("entrada1 ("+entrada1+") es igual que entrada2 (" + entrada2 + ")");
}else{
    console.log("ERROR: Caso no contemplado.");
    console.log("entrada1: " + entrada1);
    console.log("entrada2: " + entrada2);
}