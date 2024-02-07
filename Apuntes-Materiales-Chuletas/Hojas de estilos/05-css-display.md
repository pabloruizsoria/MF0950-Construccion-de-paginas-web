# Comportamiento del atributo display en CSS
El **atributo** **display** determina cómo se va a mostrar un elemento en la página.

## block:
El elemento se mostrará como un bloque, ocupando todo el ancho disponible.
Comienza en una nueva línea y se extiende hasta el final del contenedor.

Ejemplo:
div {
  display: block;
}

## inline:
El elemento se mostrará en línea, permitiendo que otros elementos estén en la misma línea que él.
Ocupa solo el espacio necesario y no inicia una nueva línea.

Ejemplo:
span {
  display: inline;
}

## inline-block:
Similar a inline, pero permite especificar dimensiones y márgenes.
Permite al elemento tener dimensiones y márgenes como un bloque, pero aún se muestra en línea.

Ejemplo:
img {
  display: inline-block;
}

## flex:
El elemento se convierte en un contenedor flexible que puede alinear y distribuir elementos de manera dinámica en una o más direcciones.

Ejemplo:
.container {
  display: flex;
}

## grid:
El elemento se convierte en un contenedor de cuadrícula que facilita el diseño en filas y columnas.

Ejemplo:
.container {
  display: grid;
}

## none:
El elemento no se mostrará en la página.
Es como si el elemento no estuviera presente en la estructura del documento.

Ejemplo:
.hidden-element {
  display: none;
}

## table:
El elemento se comporta como un elemento de tabla.
Puedes usar sub-valores como table-row, table-cell, etc.

Ejemplo:
table {
  display: table;
}
## Otros
Estos son algunos de los valores más comunes del atributo display. La elección del valor dependerá de la estructura y diseño específicos que desees lograr en tu página web. Además, con la introducción de **Flexbox** y **Grid** en , ahora hay opciones más poderosas para el diseño de páginas web complejas.