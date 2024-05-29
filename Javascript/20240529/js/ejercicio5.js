function deleteSelected(){
    var a = prompt("Introduce el número de la lista que quieres eliminar");
    var listado = document.getElementById('listado');

    if (a > listado.children.length-1|| a < 0) { // compruebo que esa posición exista
        alert("El número introducido no es válido");
    }else {
        listado.removeChild(listado.children[a]);
    }


}
//Añado al botón un escuchador de click que llame a la función anadeListado
document.getElementById('btn').addEventListener('click', deleteSelected);
