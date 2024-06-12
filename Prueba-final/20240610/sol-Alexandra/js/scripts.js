function mostrarMensaje() {
    console.log('Botón 1 pulsado');
}

function agregarElementoMenu() {
    var nuevoElemento = document.createElement('li');
    var nuevoEnlace = document.createElement('a');
    nuevoEnlace.href = 'https://es.wikipedia.org/wiki/Wikipedia:Portada';
    nuevoEnlace.textContent = 'Nuevo Enlace';
    nuevoElemento.appendChild(nuevoEnlace);
    document.querySelector('nav ul').appendChild(nuevoElemento);
}

    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('boton1').addEventListener('click', mostrarMensaje);
    document.getElementById('boton2').addEventListener('click', agregarElementoMenu);
});
