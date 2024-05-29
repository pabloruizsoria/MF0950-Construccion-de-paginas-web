/**
 * Return a list of elements of pokemos from https://pokeapi.co/api/v2/pokemon
 */
async function getPokemons() {
    try {
        var respuesta = await fetch('https://pokeapi.co/api/v2/pokemon'); // Pido los datos a la API

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }
        var data = await respuesta.json(); // Espero a que me devuelva los datos en formato JSON

        var listado = document.getElementById('listado'); // Del HTML obtengo el elemento ul donde quiero listar los pokemons

        for (var i = 0; i < data.results.length; i++) { // Recorro el array de pokemons

            var li = document.createElement('li');// Creo un elemento li
            var link = document.createElement('a');// Creo un elemento a

            link.textContent = data.results[i].name;// Añado el nombre del pokemon al enlace
            link.href = data.results[i].url;// Añado la url del pokemon al enlace

            li.appendChild(link);// Añado el enlace al elemento li

            listado.appendChild(li);// Añado el elemento li al listado
        }

    } catch (error) {
        console.log(error);
    }
}

document.getElementById('btn').addEventListener('click', getPokemons);