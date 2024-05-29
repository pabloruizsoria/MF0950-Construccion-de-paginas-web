function borraUltimoElemento(){
    var ul = document.getElementById('listado');

    var ultimoElemento = ul.lastElementChild;

    //ul.removeChild(ultimoElemento);

    ultimoElemento.remove();
}


document.getElementById('btn').addEventListener('click', borraUltimoElemento);