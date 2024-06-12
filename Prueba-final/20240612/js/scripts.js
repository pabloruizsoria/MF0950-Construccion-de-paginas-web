function funcionParaBoton1(){
    console.log("Boton 1");
}

function funcionParaBoton2(){
    var enlace = document.createElement("a");
    enlace.href = "https://www.as.com";
    enlace.innerText = "AS.com";

    var li = document.createElement("li");

    var ul = document.getElementById("listado");
    ul.appendChild(li);
    li.appendChild(enlace);
}

document.getElementById("boton1").addEventListener("click", funcionParaBoton1);
document.getElementById("boton2").addEventListener("click", funcionParaBoton2);