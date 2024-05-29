function borraElemento(){
    var elemento = document.getElementById('elemento5');
    elemento.remove();

    //document.getElementById('elemento5').remove(); esto es equivalente a las 2 líneas anteriores
}


document.getElementById('btn').addEventListener('click', borraElemento);