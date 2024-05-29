function showHideLayer(show){
    var div = document.getElementById('capa');
    if(show){
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

document.getElementById('btnMostrar').addEventListener('click', function(){
    showHideLayer(true);
});
document.getElementById('btnOcultar').addEventListener('click', function(){
    showHideLayer(false);
});