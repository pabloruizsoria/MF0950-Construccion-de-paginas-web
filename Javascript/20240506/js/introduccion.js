/* Esto es un comentario */
// Esto es otro comentario, de una línea
/*
Comentario
multilinea
*/

// Variables y constantes
var i = 0; // Usaremos la palabra reservada var para definir variables. En este caso creamos la variable i y le asignamos el valor 0
console.log(i); // Escribo en el log el valor de la variable i
i = 1; // Asigno a la variable i el valor 1
console.log(i);
i = 2;
console.log(i);

var j; // Creo la variable j
console.log(j); // muestro por pantalla el valor de la variable j
j = "hola"; // Asigno a la variable j el valor de la cadena de texto hola
console.log(j);
j = 15; // Asigno a la variable j el valor numérico 15
console.log(j);

const pi = 3.14159; // creo una constante llamada pi y le asigno el valor real 3.14159
console.log(pi);
// pi = 3.1416; una constante no puede ser modificada

/*
Este bloque es equivalente
var numero = 6;
var numero=6;
var numero =6;
var numero= 6;
*/

var k = 100;
console.log(k);
k = k + 5; //Ejemplo de suma. 1º se ejecuta la parte derecha del igual y 2º se hace la asignación
console.log(k);

/*
Esta forma es equivalente a la anterior.
---> Evitaremos este uso <---
---> Evitaremos este uso <---
var k = 100; console.log(k); k = k + 5; console.log(k);
*/

// Tipos de datos
var a = 0; // enteros
var b = -5; // enteros
var c = 68; // enteros

var d = 3.14;//reales
var e = -6.47;//reales
var f = 0.00;//reales

var g = "Hola" // Cadena de texto
var h = "Adios" // Cadena de texto

var m = true; // booleano
var n = false; // booleano

var p = [1, 2, 3, 4, 5]; // array o lista de 5 números enteros
var q = ["hola", "adios"]; // array o lista de 2 cadenas de texto
var r = [1.6, 2.4, 3.7, 4.0, 5.98]; // array o lista de 5 números reales
var s = [true, true, false, true, false, false]; // lista de 6 elementos booleanos
var t = [1, "hola", 3.4, "adios", false]; //lista de 5 elementos de distinto tipo

var u = [ [1, 2], true, [3.4, "hola"] ]; //lista de 3 elementos que a su vez contiene 2 listas variadas


















