/**
 * Esta función nos devuelve true si el número que le pasamos es par 
 * y false si es impar.
 */
function esPar(numero){
    if(numero % 2 == 0){
        return true;
    }else{
        return false;
    }

}

/**
 * Esta función escribe si el número dado es par o impar.
 */
function escribeParidad(numero){
    if(numero % 2 == 0){
        console.log("El número " + numero + " es par");
    }else{
        console.log("El número " + numero + " es impar");
    }
}

/**
 * Esta función escribe el cuadrado de un número que nos den
 */
function escribeCuadrado(numero){
    var resultado = numero * numero;
    console.log("El cuadrado de " + numero + " es " + resultado);
}

/**
 * Esta función escribe el factorial del numero que nos den. Recursiva.
 */
function escribeFactorial(numero){
    if(numero == 0){
        return 1;
    }else{
        return numero * escribeFactorial(numero - 1);
    }
}

/**
 * Función que escribe por pantalla que numero de los 2 dados es mayor
 */
function escribeMayor(numero1, numero2){
    if(numero1 > numero2){
        console.log("El número " + numero1 + " es mayor que " + numero2);
    }else if(numero2 > numero1){
        console.log("El número " + numero2 + " es mayor que " + numero1);
    }else{
        console.log("Los números son iguales");
    }
}

/**
 * Función que nos dice si un número es primo o no.
 */
function esPrimo(numero){
    var contador = 0;
    for(var i = 1; i <= numero; i++){
        if(numero % i == 0){
            contador++;
        }
    }
    if(contador == 2){
        return true;
    }else{
        return false;
    }
}

escribeParidad(5);
escribeParidad(2);
escribeParidad(1);

var a = esPar(4);
if(a){
    console.log("esPar dice que el número es par");
}else{
    console.log("esPar dice que el número es impar");
}

escribeCuadrado(3);
escribeCuadrado(5);
escribeCuadrado(10);

