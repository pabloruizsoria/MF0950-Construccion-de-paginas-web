var idPokemonActual = 5;

async function getPokemon() {
    try {
        // Pido los datos a la API
        var respuesta = await fetch('https://pokeapi.co/api/v2/pokemon-form/'+idPokemonActual+'/'); 

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        var data = await respuesta.json(); // Espero a que me devuelva los datos en formato JSON

        // Del HTML obtengo la capa en la que pintar
        var capa = document.getElementById('pokeinfo'); 

        //Borro el contenido de la capa
        capa.innerHTML = "";

        // Obtengo el nombre del pokemon del json
        var nombrePokemon = data.name;

        //Creo el h1 con el nombre del pokemon y lo añado a la capa
        var h1 = document.createElement('h1');
        h1.textContent = nombrePokemon + '(' + idPokemonActual + ')';
        capa.appendChild(h1);

        // Obtenemos las imágenes de nuestro pokemon
        var png1 = data.sprites.front_default;
        var png2 = data.sprites.front_shiny;

        // Creamos los elementos img y los añadimos a la capa
        var img1 = document.createElement('img');
        img1.src = png1;
        capa.appendChild(img1);

        // a img le añado un evento onover que cambie la imagen
        img1.addEventListener('mouseover', function() {
            img1.src = png2;
        });
        // a img le añado un evento onout que cambie la imagen
        img1.addEventListener('mouseout', function() {
            img1.src = png1;
        });
    } catch (error) {
        console.log(error);
    }
}

function pokemonAnterior() {
    idPokemonActual--;
    if( idPokemonActual ==  1 ){
        document.getElementById('btnAnterior').disabled = true;
    }
    getPokemon();
}

function pokemonSiguiente() {
    idPokemonActual++;
    if( idPokemonActual ==  2 ){
        document.getElementById('btnAnterior').disabled = false;
    }
    getPokemon();
}


document.getElementById('btnAnterior').addEventListener('click', pokemonAnterior);
document.getElementById('btnSiguiente').addEventListener('click', pokemonSiguiente);

getPokemon();