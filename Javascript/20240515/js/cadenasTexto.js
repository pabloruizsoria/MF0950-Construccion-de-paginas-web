var texto1 = "Hola";
var texto2 = "Buenos días";
var texto3 = "a todos";
var espacio = " ";
var punto = ".";
var texto4 = "    HOLA A TODOS Y TODAS     ";
var texto5 = "    hola a todos y todas     ";
//var 6texto = "hola caracola"; en js las variables no pueden empezar por números
var texto7 = "HOLA A TODOS Y TODAS";


//
// ** FUNCIONES **
//

//Concatenar. Símbolo +
var nuevaVar = texto1 + espacio + texto3 + punto;

console.log(nuevaVar);

// Longitud de una cadena de texto. Propiedad length
var longNuevaVar = nuevaVar.length;

console.log(longNuevaVar);

switch (longNuevaVar) {
    case 12:
        console.log("La longitud de nuevaVar es 12");
        //break;
    case 13:
        console.log("La longitud de nuevaVar es 13");
        //break;
    case 14:
        console.log("La longitud de nuevaVar es 14");
        //break;
    default:
        console.log("La longitud de nuevaVar no es 12, ni 22 ni 14");
        break;
  }
// Quitar espacios en blaco al inicio y al final de un texto: Método trim()
var sinEspaciosTexto4 = texto4.trim();
console.log("'" + sinEspaciosTexto4 + "'");

// Poner todo en mayúsculas. Método toUpperCase();
var nuevaVarEnMayus = nuevaVar.toUpperCase();
console.log(nuevaVarEnMayus);

// Poner todo en minúsculas. Método toLowerCase();
var nuevaVarEnMinus = nuevaVar.toLowerCase();
console.log(nuevaVarEnMinus);

// Obtener el caracter en una posición concreta
var caracterEnPos2 = texto2.charAt(2);
console.log(texto2);
console.log(caracterEnPos2);

// Divide una cadena de texto en una lista. Método split(delimitador);
var miCadena = texto7.split(" "); //var texto7 = "HOLA A TODOS Y TODAS";
console.log(miCadena[0]);// HOLA
console.log(miCadena[1]);// A
console.log(miCadena[2]);// TODOS
//...

// Reemplazar un texto
var miNuevoTexto = "Hamburguesa".replace("ur", "ENSALADA");
console.log(miNuevoTexto);
