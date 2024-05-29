function showHideLayer(){
    var div = document.getElementById('capa');
    if(div.style.display == 'none'){
        div.style.display = 'block';
    }else{
        div.style.display = 'none';

    }
}

document.getElementById('btn').addEventListener('click', showHideLayer);