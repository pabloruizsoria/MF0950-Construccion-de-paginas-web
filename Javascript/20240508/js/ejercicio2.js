var entrada1 = prompt("Introduce un número entero");

// Compruebo si el dato es válido
if( entrada1 < 0 ){

    console.log("El número es negativo");

}else if( entrada1 > 0 ){

    console.log("El número es positivo");

}else if( entrada1 == 0 ){

    console.log("El número es 0");

}else{
    console.log("Combinación no contemplada");
}