var texto = prompt("Dame una cadena de texto y te cuento las vocales");

var letraAEvaluar;
var vocales = 0;

for(var i = 0; i < texto.length ;i++){

    letraAEvaluar = texto.charAt(i);
    if( letraAEvaluar.toUpperCase() == "A"
            || letraAEvaluar.toUpperCase() == "E"
            || letraAEvaluar.toUpperCase() == "I"
            || letraAEvaluar.toUpperCase() == "O"
            || letraAEvaluar.toUpperCase() == "U"
            ){
        vocales++;
    }
}

console.log("El texto '" + texto + "' tiene " + vocales + " vocales.");