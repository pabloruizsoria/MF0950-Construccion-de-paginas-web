function modificaEstilo(){
    var parrafo = document.getElementById('parrafo');

    parrafo.style.backgroundColor = 'red';
    parrafo.style.color = 'black';
}

function modificaEstilo2(){
    var parrafo = document.getElementById('parrafo');

    parrafo.style.backgroundColor = 'pink';
    parrafo.style.color = 'red';
}


document.getElementById('btn').addEventListener('click', modificaEstilo);

document.getElementById('parrafo').addEventListener('mouseover', modificaEstilo2)
