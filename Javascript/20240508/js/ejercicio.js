var secreto = 5;
var entrada1 = prompt("Introduce un número entre 1 y 10 incluídos");

// Compruebo si el dato es válido
if( entrada1 < 1 ){
    console.log("El dato introducido es menor que 1. No es válido");
}else if( entrada1 > 10 ){
    console.log("El dato introducido es mayor que 10. No es válido");
}else{//es un dato comprendido entre 1 y 10
    if( secreto == entrada1 ){
        console.log("Has acertado el número secreto");
    }else{
        console.log("No has acertado el número secreto. Sigue probando");
    }
}