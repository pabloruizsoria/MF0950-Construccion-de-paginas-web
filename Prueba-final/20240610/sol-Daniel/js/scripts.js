 // BOTON 1
 const boton1 = document.getElementById('boton1');

 boton1.addEventListener('click', () => {
     alert('Has presionado el botón 1');
 });


 // BOTON 2
 const boton2 = document.getElementById('boton2');
 

 boton2.addEventListener('click', () => {
     // Crea un nuevo elemento de lista (li)
     const nuevoEnlaceLi = document.createElement('li');
     // Crea un nuevo elemento de enlace (a)
     const nuevoEnlaceA = document.createElement('a');
     // Establece los atributos del enlace
     nuevoEnlaceA.setAttribute('href', 'https://www.ejemplo.com');
     nuevoEnlaceA.setAttribute('target', '_blank');
     nuevoEnlaceA.setAttribute('title', 'Nuevo enlace');
     // Establece el texto del enlace
     nuevoEnlaceA.textContent = 'Nuevo Enlace';
     // Agrega el enlace al elemento de lista
     nuevoEnlaceLi.appendChild(nuevoEnlaceA);
     // Selecciona la lista de menú
     const menu = document.querySelector('.menu');
     // Agrega el nuevo elemento de lista al menú
     menu.appendChild(nuevoEnlaceLi);
 });