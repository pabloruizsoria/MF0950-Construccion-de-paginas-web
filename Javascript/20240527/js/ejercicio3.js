function escribeTablaMultiplicar(numero){
    for(var i = 0; i <= 10; i++){
        console.log(numero + " x " + i + " = " + numero * i);
    }
}

escribeTablaMultiplicar (prompt("Introduce un número para ver su tabla de multiplicar") );