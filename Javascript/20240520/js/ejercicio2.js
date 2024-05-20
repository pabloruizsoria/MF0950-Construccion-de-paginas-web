var linea = prompt("¿Cuántas líneas debo pintar?");

var i = 0;
while(i <= linea){
    var asteriscos = 0;
    var aPintar = "";
    while( asteriscos < i ){
        aPintar = aPintar + "*";
        asteriscos++;
    }
    console.log(aPintar);
    i++;
}