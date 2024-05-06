var a = 5;
var b = 10;

var capaResultado = document.getElementById("resultado"); //cojo del HTML el elemento cuyo id es resultado

if( a < b ){ // comparo si a es menor que b
    // dentro de la variable introduzco el HTML que se ve
    capaResultado.innerHTML = "<i>A (" + a + ") es menor que B (" + b + ")</i>";

    /* Avanzado: ignorar
    var italica = capaResultado.appendChild( document.createElement("b") );
    italica.innerHTML = "A (" + a + ") es menor que B (" + b + ")";
    */
}

/* ********************************* */
var capaEncabezado2 = document.getElementById("encabezado2"); //cojo del HTML el elemento cuyo id es encabezado2
var c = 15;
var d = 10;

if(c < d){ //comparo si c es menor que d, el resultado es falso por lo que no entro a este bloque de ejecución
    capaEncabezado2.innerHTML = "C (" + c + ") es menor que D (" + d + ")";
}else{ //esto se va a ejecuta siempre que la condición del if sea falsa
    capaEncabezado2.innerHTML = "C (" + c + ") no es menor que D (" + d + ")";
}

/* ********************************* */
var capaPrompts = document.getElementById("capaPrompts"); //cojo del HTML el elemento cuyo id es capaPrompts
var e = prompt("Introduce un valor para la variable e"); //prompt nos devuelve una cadena de texto

var f = prompt("Introduce un valor para la variable f"); //prompt nos devuelve una cadena de texto

// Vamos a comparar cadenas de texto lo que probablemente nos va a dar resultados ilógicos.
// Para un uso mas correcto deberíamos usar la función parseInt pero por simplicidad lo dejamos así de momento
// mas info de parseInt en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt

if(e > f ){ //comparo si c es menor que d, el resultado es falso por lo que no entro a este bloque de ejecución
    capaPrompts.innerHTML = "E (" + e + ") es mayor que f (" + f + ")";
}else if( e == f){
    capaPrompts.innerHTML = "E (" + e + ") es igual que f (" + f + ")";
}else if( e < f){
    capaPrompts.innerHTML = "E (" + e + ") es menor que f (" + f + ")";
}else{
    capaPrompts.innerHTML = "Combinación no contemplada. E (" + e + ") . F (" + f + ")";
}

/*
Algunas comparaciones posibles
< menor que
> mayor que
<= menor o igual que
>= mayor o igual que
== igual que
*/
