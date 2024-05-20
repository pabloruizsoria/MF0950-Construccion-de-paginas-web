var numero = prompt("Dame un número (entre 1 y 12) y te lo factorizo");
var cadena = "El factorial de " + numero;
// Se debería comprobar que está entre 1 y 12 incluído
var resultado = 1;
while(numero > 1){
    resultado = resultado * numero;
    numero--;
}
cadena = cadena + " es " + resultado;

console.log(cadena);