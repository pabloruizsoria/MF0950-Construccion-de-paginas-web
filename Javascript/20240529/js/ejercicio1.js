function escribe(){
    var parrafo = document.createElement('p');// Creo un elemento p
    parrafo.innerHTML = 'Hola caracola';// Añado texto al parrafo
    var div = document.getElementById('resultado');// Del HTML obtengo el elemento div donde quiero añadir el parrafo
    div.appendChild(parrafo);// Añado el parrafo al div
}


document.getElementById('btn').addEventListener('click', escribe);