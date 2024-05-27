function minimoComunMuntiplo(a, b){
    var mcm = 0;
    var mayor = Math.max(a, b);
    var menor = Math.min(a, b);
    var i = 1;
    while(i <= menor){
        if((mayor * i) % menor == 0){
            mcm = mayor * i;
            break;//Si ya hemos encontrado el mcm, salimos del bucle
        }
        i++;
    }
    return mcm;
}

function maximoComunDivisor(a, b){
    var mcd = 0;
    var mayor = Math.max(a, b);
    var menor = Math.min(a, b);
    for(var i = 1; i <= menor; i++){
        if(mayor % i == 0 && menor % i == 0){
            mcd = i;
        }
    }
    return mcd;
}

var a = prompt("Dame el primer número");
var b = prompt("Dame el segundo número");
var mcm = minimoComunMuntiplo(a, b);
var mcd = maximoComunDivisor(a, b);

console.log("El MCM de " + a + " y " + b + " es " + mcm);
console.log("El MCD de " + a + " y " + b + " es " + mcd);