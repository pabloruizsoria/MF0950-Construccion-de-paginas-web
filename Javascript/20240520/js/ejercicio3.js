
var linea = 1;

while(linea <= 10){
    var asteriscos = 0;
    var aPintar = "";
    if(linea % 2 == 0){ //par
        console.log("*");
    }else{
        while( asteriscos < linea ){
            aPintar = aPintar + "*";
            asteriscos++;
        }
        console.log(aPintar);
    }
    linea++;
}