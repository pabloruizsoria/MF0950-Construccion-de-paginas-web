var a = 5;
var b = 7;

if(a < b){
    console.log("a (" + a + ") es menor que b (" + b + ")");
}

if(a > b){
    console.log("a (" + a + ") es mayor que b (" + b + ")");
}

if(a <= b){
    console.log("a (" + a + ") es menor o igual que b (" + b + ")");
}

if(a >= b){
    console.log("a (" + a + ") es mayor o igual que b (" + b + ")");
}

if(a == b){
    console.log("a (" + a + ") es igual que b (" + b + ")");
}

if(a != b){
    console.log("a (" + a + ") es distinto que b (" + b + ")");
}

// (pre y post )incrementos
console.log("a: " + a);
a++; // Incrementamos en 1 el valor de a

console.log("a: " + a);
console.log("a++: " + a++);//toma el valor de a y luego incrementa 1
console.log("a: " + a);
console.log("++a: " + ++a);//incrementa 1 y luego toma el valor de a
console.log("a: " + a);

// Elevar
var base = 2;
var exponente = 10;
var resultado = 2 ** 10;
console.log("resultado: " + resultado);

//concatener cadenas
var texto = "Hola";
console.log( texto );
texto = texto + " y adios"
console.log( texto );
texto = "Esqueleto con peluca";
console.log( texto );
texto = "Dos " + 2 + ", tres " + 3;
console.log( texto );
texto = "Huevos fritos";
console.log( texto );
texto += " con patatas"; // es quivalente a texto = texto + " con patatas";
console.log( texto );

// Operador ternario
var edad = 20;

if(edad >= 18){
    console.log("Puedes entrar al after");
}else{
    console.log("No puedes entrar");
}

(edad >=18) ? console.log("Puedes entrar al after") : console.log("No puedes entrar"); // Esto es equivalente al if-else anterior

// typeof
console.log(typeof a);
console.log(typeof texto);

var condicion = true;
console.log(typeof condicion);

var lee = prompt("Dame un número");
console.log(typeof lee);

//this
// Lo veremos mas adelante