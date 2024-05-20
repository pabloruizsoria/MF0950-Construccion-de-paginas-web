var i = 10;
/*
Sin bucles haríamos esto:
i = i + 1; //1
console.log("i: " + i);

i = i + 1; //1
console.log("i: " + i);

i = i + 1; //1
console.log("i: " + i);

i = i + 1; //1
console.log("i: " + i);

i = i + 1; //1
console.log("i: " + i);
...
*/

// Ejemplo de bucle while
while( i < 10 ){
    console.log("i en while: " + i);
    i = i + 1; // i++
}

// Ejemplo de bucle for
/*for(i = 0; i < 10 ; i++){
    console.log("i: " + i);
}*/

do{
    console.log("i en el do while: " + i);
    i++;
}while(i < 10);

var indice = 0;
var lista = ["bicicleta", "monopatín", "patines"];
while( indice < lista.length ){
    var elemento = lista[ indice ];
    console.log("Elemento en while: " + elemento);
    indice++;
}

for (var index = 0; index < lista.length; index++) {
    elemento = lista[index];
    console.log("Elemento en for: " + elemento);
}

for(const elemento of lista){
    console.log("Elemento en for lista: " + elemento);
}

i = 0;
while(i < 10){
    if( i == 2){
        i++;
        continue;
    }
    console.log(i);
    if(i == 5){
        break;
    }
    i++;
}