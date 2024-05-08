//
// CONDICIONALES
//
/*
if (condicion){
    instrucción que se ejecutará si la dondición es verdad;
    instrucción que se ejecutará si la dondición es verdad;
    instrucción que se ejecutará si la dondición es verdad;
}else{
    instrucción que se ejecutará si la dondición es falsa;
    instrucción que se ejecutará si la dondición es falsa;
}

*/

var a = 1;
var b = 2;

if(a > b){
    console.log( "A es mayor que B" );
}else{
    console.log( "A no es mayor que B" );
}

if (b > a){
    console.log( "B (" + b + ") es mayor que A" );
}else{
    console.log( "B NO es mayor que A" );
}

var c = 5

if(c == 10 ){
    console.log( "C es igual que 10" );
}
if(c == 9 ){
    console.log( "C es igual que 9" );
}
if(c == 5 ){
    console.log( "C es igual que 5" );
}

/*
if(c == 10){
    console.log( "C es igual que 10" );
}else{
    if(c == 9 ){
        console.log( "C es igual que 9" );
    }else{
        if(c == 5 ){
            console.log( "C es igual que 5" );
        }
    }
}*/

if(c == 10 ){
    console.log( "C es igual que 10" );
}else if( c == 9  ){
    console.log( "C es igual que 9" );
}else if( c == 5  ){
    console.log( "C es igual que 5" );
}else if( c == 4  ){
    console.log( "C es igual que 4" );
}



if(c == 10 ){
    console.log( "C es igual que 10" );
}else if( c == 9  ){
    console.log( "C es igual que 9" );
}else{
    console.log( "C no es ni 10 ni 9" );
}