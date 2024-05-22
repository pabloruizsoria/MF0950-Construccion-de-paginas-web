/*var i = 0;

i = i + 1;
console.log(i);

i = i + 1;
console.log(i);

i = i + 1;
console.log(i);

i = i + 1;
console.log(i);

i = i + 1;
console.log(i);

i = i + 1;
console.log(i);*/

var i = 0;
/*
while( condicion ){
    código que queremos que se ejecute mientras la condición sea cierta
}*/

while( i < 101 ){
    i = i + 1;
    console.log("i: " + i);
}
/*
for(variable;condicion;actuacion_sobre_la_variable){
    código que queremos que se ejecute mientras la condición sea cierta
}
*/
for( var a = 0; a <= 10 ; a++ ){
    console.log("a: " + a);
}
/*
do{
    código que queremos que se ejecute mientras la condición sea cierta
}while(condicion);
*/
var b = 0;
do{
    console.log("b: " + b);
    b++;
}while(b <= 10);
/*
for(variable; condicion; actucion_sobre_variable){
    instrucciones que queremos que se ejecuten;
    si aparece la palabra break -> salimos del bucle
    si aparece la palabra continue -> pasamoa al siguiente bucle
}
*/
var c = 11;

while( c > 0 ) {
    c--;

    if( c == 3){
        break;//nos saca del bucle
    }

    if( c % 2 == 0){ // par
        continue;//nos lleva al inicio del bucle
    }
    console.log("c: " + c);
}

var lista = ["bicicleta", "monopatín", "patines", "peonza"];//Las listas empiezan en la posición 0
/*
var elemento1 = lista[0];
var elemento2 = lista[1];
var elemento3 = lista[2];
console.log("elemento1: " + elemento1);
console.log("elemento2: " + elemento2);
console.log("elemento3: " + elemento3);
*/

for(var j = 0; j < lista.length ; j++){

    var elemento = lista[j];
    console.log(j + ": " + elemento);

}
















