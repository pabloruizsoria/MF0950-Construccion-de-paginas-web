var edadPablo = 40;
var edadDaniel = 45;
var edadAlexandra = 35;

var edadComparacion = 55;

if ( edadPablo > edadComparacion){
    console.log("La edad de Pablo es susperior a " + edadComparacion);
}

if (edadDaniel > edadComparacion){
    console.log("La edad de Daniel es susperior a " + edadComparacion);
}

if ( edadAlexandra > edadComparacion){
    console.log("La edad de Alexandra es susperior a " + edadComparacion);
}

edadComparacion = 40;

if ( edadPablo > edadComparacion ){
    console.log("La edad de Pablo es susperior a " + edadComparacion);
}

if (edadDaniel > edadComparacion ){
    console.log("La edad de Daniel es susperior a " + edadComparacion); // se escribiría este
}

if (edadAlexandra > edadComparacion ){
    console.log("La edad de Alexandra es susperior a " + edadComparacion);
}

edadComparacion = 25;

if (edadPablo > edadComparacion ){
    console.log("La edad de Pablo es superior a " + edadComparacion); // se escribiría este
}

if (edadDaniel > edadComparacion ){
    console.log("La edad de Daniel es superior a " + edadComparacion); // se escribiría este
}

if (edadAlexandra > edadComparacion ){
    console.log("La edad de Alexandra es superior a " + edadComparacion); // se escribiría este
}

edadComparacion = 55;

if ( (edadPablo > edadComparacion ) && ( edadDaniel > edadComparacion) ){ // false and false -> false
    console.log("La edad de Pablo es susperior a " + edadComparacion + " y la edad de Daniel es superior a " + edadComparacion);
}

if ( (edadAlexandra > edadComparacion ) && ( edadDaniel > edadComparacion) ){ // false and false -> false
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " y la edad de Daniel es superior a " + edadComparacion);
}

if ( (edadAlexandra > edadComparacion ) && ( edadPablo > edadComparacion) ){ // false and false -> false
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " y la edad de Pablo es superior a " + edadComparacion);
}

edadComparacion = 40;

if ( (edadPablo > edadComparacion ) && ( edadDaniel > edadComparacion) ){ // false and verdadero -> falso
    console.log("La edad de Pablo es susperior a " + edadComparacion + " y la edad de Daniel es superior a " + edadComparacion);
}

if ( (edadAlexandra > edadComparacion ) && ( edadDaniel > edadComparacion) ){ // false and verdader -> false
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " y la edad de Daniel es superior a " + edadComparacion);
}

if ( (edadAlexandra > edadComparacion ) && ( edadPablo > edadComparacion) ){ // false and false -> false
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " y la edad de Pablo es superior a " + edadComparacion);
}

edadComparacion = 25;

if ( (edadPablo > edadComparacion ) && ( edadDaniel > edadComparacion) ){ // verdadero and verdadero -> verdadero
    console.log("La edad de Pablo es susperior a " + edadComparacion + " y la edad de Daniel es superior a " + edadComparacion);// se escribiría este
}

if ( (edadAlexandra > edadComparacion ) && ( edadDaniel > edadComparacion) ){ // verdadero and verdader -> verdadero
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " y la edad de Daniel es superior a " + edadComparacion);// se escribiría este
}

if ( (edadAlexandra > edadComparacion ) && ( edadPablo > edadComparacion) ){ // verdadero and verdadero -> verdadero
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " y la edad de Pablo es superior a " + edadComparacion);// se escribiría este
}

edadComparacion = 55;

if( (edadAlexandra > edadComparacion) 
        && ( edadDaniel > edadComparacion) 
        && (edadPablo > edadComparacion ) ){ // false and false and false -> false
    console.log("Todos tienen mas de " + edadComparacion);
}

edadComparacion = 40;

if( (edadAlexandra > edadComparacion) 
        && ( edadDaniel > edadComparacion) 
        && (edadPablo > edadComparacion ) ){ // false and true and false -> false
    console.log("Todos tienen mas de " + edadComparacion);
}

edadComparacion = 25;

if( (edadAlexandra > edadComparacion) 
        && ( edadDaniel > edadComparacion) 
        && (edadPablo > edadComparacion ) ){ // true and true and true -> true
    console.log("Todos tienen mas de " + edadComparacion); // se escribiría
}



// FALSE

edadComparacion = 55;

if ( (edadPablo > edadComparacion ) || ( edadDaniel > edadComparacion) ){ // false or false -> false
    console.log("La edad de Pablo es susperior a " + edadComparacion + " o la edad de Daniel es superior a " + edadComparacion);
}

if ( (edadAlexandra > edadComparacion ) || ( edadDaniel > edadComparacion) ){ // false or false -> false
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " o la edad de Daniel es superior a " + edadComparacion);
}

if ( (edadAlexandra > edadComparacion ) || ( edadPablo > edadComparacion) ){ // false or false -> false
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " o la edad de Pablo es superior a " + edadComparacion);
}

edadComparacion = 40;

if ( (edadPablo > edadComparacion ) || ( edadDaniel > edadComparacion) ){ // false or verdadero -> verdadero
    console.log("La edad de Pablo es susperior a " + edadComparacion + " o la edad de Daniel es superior a " + edadComparacion);// se escribiría este
}

if ( (edadAlexandra > edadComparacion ) || ( edadDaniel > edadComparacion) ){ // false or verdader -> verdadero
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " o la edad de Daniel es superior a " + edadComparacion);// se escribiría este
}

if ( (edadAlexandra > edadComparacion ) || ( edadPablo > edadComparacion) ){ // false or false -> false
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " o la edad de Pablo es superior a " + edadComparacion);
}

edadComparacion = 25;

if ( (edadPablo > edadComparacion ) || ( edadDaniel > edadComparacion) ){ // verdadero or verdadero -> verdadero
    console.log("La edad de Pablo es susperior a " + edadComparacion + " o la edad de Daniel es superior a " + edadComparacion);// se escribiría este
}

if ( (edadAlexandra > edadComparacion ) || ( edadDaniel > edadComparacion) ){ // verdadero or verdadero -> verdadero
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " o la edad de Daniel es superior a " + edadComparacion);// se escribiría este
}

if ( (edadAlexandra > edadComparacion ) || ( edadPablo > edadComparacion) ){ // verdadero or verdadero -> verdadero
    console.log("La edad de Alexandra es susperior a " + edadComparacion + " o la edad de Pablo es superior a " + edadComparacion);// se escribiría este
}



edadComparacion = 55;

if( (edadAlexandra > edadComparacion) 
        || ( edadDaniel > edadComparacion) 
        || (edadPablo > edadComparacion ) ){ // false ior false or false -> false
    console.log("Alguien tiene mas de " + edadComparacion);
}

edadComparacion = 40;

if( (edadAlexandra > edadComparacion) 
        || ( edadDaniel > edadComparacion) 
        || (edadPablo > edadComparacion ) ){ // false or true or false -> true
    console.log("Alguien tiene mas de " + edadComparacion);//se escribiría
}

edadComparacion = 25;

if( (edadAlexandra > edadComparacion) 
        || ( edadDaniel > edadComparacion) 
        || (edadPablo > edadComparacion ) ){ // true or true or true -> true
    console.log("Alguien tiene mas de " + edadComparacion);//se escribiría
}

// Prioridades
var i = 1;

if( true ){ // 1
    console.log("if " + i + " se escribe.");
}
i++;

if( false ){ // 2
    console.log("if " + i + " se escribe.");
}
i++;

if( true && true){ // 3
    console.log("if " + i + " se escribe.");
}
i++;

if( true && false){ // 4
    console.log("if " + i + " se escribe.");
}
i++;

if( true || true){ // 5
    console.log("if " + i + " se escribe.");
}
i++;

if( true ||  false){ // 6
    console.log("if " + i + " se escribe.");
}
i++;

if( false ||  false){ // 7
    console.log("if " + i + " se escribe.");
}
i++;

if( true && (false || false) ){ // 8
    // true && (false || false)
    // true && false
    // false
    console.log("if " + i + " se escribe.");
}
i++;


if( true 
        || (false && false) ){ // 9
    // true || (false && false)
    // true || false
    // true
    console.log("if " + i + " se escribe.");
}
i++;
