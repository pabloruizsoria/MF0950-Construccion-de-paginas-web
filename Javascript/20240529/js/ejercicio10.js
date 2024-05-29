function textExchange(){
    let text1 = document.getElementById('parrafo1').innerText;
    let text2 = document.getElementById('parrafo2').innerText;

    document.getElementById('parrafo1').innerText = text2;
    document.getElementById('parrafo2').innerText = text1;
}

document.getElementById('boton').addEventListener('click', textExchange);