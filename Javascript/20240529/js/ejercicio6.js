function moveText(){

    var input = document.getElementById('texto');

    var textArea = document.getElementById('cuadro');

    textArea.append(input.value + "\n");

    // Vacío input de texto
    input.value = '';
}
//Añado al botón un escuchador de click que llame a la función anadeListado
document.getElementById('btn').addEventListener('click', moveText);
