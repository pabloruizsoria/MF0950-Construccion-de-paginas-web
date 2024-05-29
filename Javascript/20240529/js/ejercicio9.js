function applyStyle(){
    var style = document.getElementById('estilo').value;
    var parrafo = document.getElementById('parrafo');
    switch(style){
        case 'normal':
            parrafo.style.fontWeight = 'normal';
            parrafo.style.fontStyle = 'normal';
            break;
        case 'negrita':
            parrafo.style.fontWeight = 'bold';
            parrafo.style.fontStyle = 'normal';
            break;
        case 'cursiva':
            parrafo.style.fontWeight = 'normal';
            parrafo.style.fontStyle = 'italic';
            break;
    }
        
}

document.getElementById('estilo').addEventListener('change', applyStyle);