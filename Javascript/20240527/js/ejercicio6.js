function dameEstadisticas(lista){
    var numMasPeque = 100000000;
    var numMasGrande = 0;
    var sumaParcial = 0;

    for(var i = 0; i < lista.length; i++){
        if(lista[i] < numMasPeque){
            numMasPeque = lista[i];
        }
        if(lista[i] > numMasGrande){
            numMasGrande = lista[i];
        }
        sumaParcial += parseInt( lista[i] ); 
    }

    console.log("El número más pequeño de la lista " + lista + " es " + numMasPeque);
    console.log("El número más grande de la lista " + lista + " es " + numMasGrande);
    console.log("La media de los números de la lista " + lista + " es " + sumaParcial / lista.length);

}

var num1 = prompt("Dame el primer numero de 5");
var num2 = prompt("Dame el segundo numero de 5");
var num3 = prompt("Dame el tercer numero de 5");
var num4 = prompt("Dame el cuarto numero de 5");
var num5 = prompt("Dame el quinto numero de 5");

var lista = [num1, num2, num3, num4, num5];

dameEstadisticas(lista);