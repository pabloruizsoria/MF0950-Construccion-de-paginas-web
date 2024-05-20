var numero = prompt("Dame un número (mayor que 1) y te digo si es primo");

var i = 2;
var esPrimo = true;
for(var i = 2; i < numero ;i++){
    if( numero % i == 0 ){
        console.log("El número " + numero + " no es primo. Se puede dividir entre " + i);
        esPrimo = false;
        break;
    }
}

if(esPrimo){
    console.log("El número " + numero + " es primo.");
}

