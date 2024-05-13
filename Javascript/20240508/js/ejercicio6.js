
var a = prompt("Introduce un número para ver si es par");

var resto = a % 2;

console.log("Número a estudiar: " + a);
console.log("Resto: " + resto);
if(resto == 0){
    console.log("Par");
}else{
    console.log("Impar");
}

/*
EN VEZ DE SUMAR ESTÁ CONCATENANDO TEXTOS.
Mas adelante veremos la función para pasar los textos a número
*/