var dni = prompt("Dame tu DNI con la letra");
const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
var debug = false;

// Quito puntos (lo suyo sería usar un bucle pero aún no los hemos visto)
dni = dni.replace(".", "");
dni = dni.replace(".", "");

// Quito espacios en blaco al principio o al final
dni = dni.trim();

// Verifico que es válido el DNI
var dniSinLetra = dni.substring( 0, dni.length - 1 );
if( debug ){
    console.log("dniSinLetra: " + dniSinLetra);
}
var letraDelDNI = dni.substring( dni.length - 1 , dni.length  );
if( debug ){
    console.log("letraDelDNI: " + letraDelDNI);
}

var resto = parseInt(dniSinLetra) % 23;
if( debug ){
    console.log("resto: " + resto);
}

var letraQueLeCorresponde = letras.charAt(resto);
if( debug ){
    console.log("letraQueLeCorresponde: " + letraQueLeCorresponde);
}

if(letraDelDNI.toUpperCase() == letraQueLeCorresponde.toUpperCase() ){
    console.log("La letra cuadra");
}else{
    console.log("La letra debería ser " + letraQueLeCorresponde + " en lugar de " + letraDelDNI);
}
