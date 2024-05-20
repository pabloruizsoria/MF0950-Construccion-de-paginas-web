
var i = prompt("¿Desde qué número quieres la cuenta atrás?");

if(i > 0){
    while(i >= 0){
        console.log(i);
        i--;
    }
}else{
    console.log("Escribe un número mas alto");
}

