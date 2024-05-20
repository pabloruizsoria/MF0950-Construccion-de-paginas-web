var numero = prompt("Dame un número positivo y te lo sumo hasta 1");

// Se debería comprobar que está entre 1 y 12 incluído
var resultado = 0;
while(numero > 0){
    resultado = parseInt(resultado) + parseInt(numero);
    numero--;
}
console.log(resultado);