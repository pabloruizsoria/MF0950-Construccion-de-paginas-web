var numero = prompt("Dame un número entre 0 y 10 incluídos y te hago su tabla de multiplicar");

// Se debería comprobar que está entre 1 y 10 incluído

var resultado = 0;
for(var i = 0; i < 11 ;i++){
    resultado = numero * i;
    console.log(numero + " * " + i + " = " + resultado);
}