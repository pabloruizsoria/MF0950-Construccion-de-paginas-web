function anadeListado(){
    // Pido un texto al usuario
    var texto = prompt('Introduce un texto');
    //Creo el elemento li
    var li = document.createElement('li');
    //Añado el texto al elemento li
    li.textContent = texto;
    //Añado el elemento li al listado
    document.getElementById('listado').appendChild(li);
}
//Añado al botón un escuchador de click que llame a la función anadeListado
document.getElementById('btn').addEventListener('click', anadeListado);
