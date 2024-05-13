// Pedimos el 1er dato de entrada
var nota = prompt("Introduce tu nota de examen (entre 1 y 10 incluído)");

// Comprobamos si el número es menor que 1
if(nota < 1){
    console.log("El dato introducido es menor que 1. No es válido");
}
// Comprobamos si el número es mayor que 10
if(nota > 10){
    console.log("El dato introducido es mayor que 10. No es válido");
}

// Comparaciones

if( nota < 5 ){
    console.log("INSUFICIENTE ("+nota+")");
}else if(nota < 6){
    console.log("SUFICIENTE ("+nota+")");
}else if(nota < 7){
    console.log("BIEN ("+nota+")");
}else if(nota < 9){
    console.log("NOTABLE ("+nota+")");
}else if(nota < 10){
    console.log("SOBRESALIENTE ("+nota+")");
}else if(nota == 10){
    console.log("MATRÍCULA ("+nota+")");
}else{
    console.log("Casuíestica no contemplada. Error.");
}
