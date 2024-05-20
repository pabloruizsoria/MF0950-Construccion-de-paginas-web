var texto = prompt("Dame una cadena de texto y te cuento las vocales excepto las tildes");

var letraAEvaluar;
var vocalesA = 0;
var vocalesE = 0;
var vocalesI = 0;
var vocalesO = 0;
var vocalesU = 0;

for(var i = 0; i < texto.length ;i++){

    letraAEvaluar = texto.charAt(i);

    if( letraAEvaluar.toUpperCase() == "A"){
        vocalesA++;
    }else if( letraAEvaluar.toUpperCase() == "E"){
        vocalesE++;
    }else if( letraAEvaluar.toUpperCase() == "I"){
        vocalesI++;
    }else if( letraAEvaluar.toUpperCase() == "O"){
        vocalesO++;
    }else if( letraAEvaluar.toUpperCase() == "U"){
        vocalesU++;
    }
}

console.log("El texto '" + texto + "' tiene: ");
console.log(vocalesA + " aes");
console.log(vocalesE + " es");
console.log(vocalesI + " is");
console.log(vocalesO + " oes");
console.log(vocalesU + " us");