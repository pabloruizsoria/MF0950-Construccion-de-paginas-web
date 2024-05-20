/*
*
**
***
****
*****
******
hasta 10
*/
var linea = 1;

while(linea <= 10){
    var asteriscos = 0;
    var aPintar = "";
    while( asteriscos < linea ){
        aPintar = aPintar + "*";
        asteriscos++;
    }
    console.log(aPintar);
    linea++;
}