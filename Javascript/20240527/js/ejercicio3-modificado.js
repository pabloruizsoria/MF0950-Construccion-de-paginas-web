function escribeTablaMultiplicar(numero){
    for(var i = 0; i <= 10; i++){
        var contenidoPrevio = document.getElementById("resultado").value;
        document.getElementById("resultado").innerHTML = contenidoPrevio + numero + " x " + i + " = " + numero * i + "\n";
    }
}

escribeTablaMultiplicar (prompt("Introduce un número para ver su tabla de multiplicar") );