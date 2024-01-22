# Flexbox y Grid
Permiten una mayor personalización de la organización de los elementos en nuestro diseño.

## Flexbox:
Flexbox (Flexible Box Layout) es un modelo de diseño unidimensional, diseñado para distribuir el espacio a lo largo de un eje (ya sea horizontal o vertical) de una manera que se adapte a diferentes tamaños de pantalla y dispositivos. Algunos conceptos clave de Flexbox son:

### Contenedor Flex:
Se crea estableciendo la propiedad display: flex; o display: inline-flex; en el contenedor.
Todos los elementos hijos directos de este contenedor se convierten en elementos flexibles (flex items).

.container {
  display: flex;
}

**Ejes**:
Flexbox tiene un eje principal y un eje transversal.
flex-direction determina la dirección principal (row, column).
justify-content controla la alineación a lo largo del eje principal.

.container {
  flex-direction: row; /* o column */
  justify-content: space-between; /* o center, flex-start, flex-end, etc. */
}

**Alineación de elementos**:
align-items controla la alineación de los elementos a lo largo del eje transversal.
align-self permite a un elemento individual anular align-items.

.container {
  align-items: center; /* o flex-start, flex-end, stretch, etc. */
}

**Orden**:
order permite cambiar el orden visual de los elementos flexibles.

.item {
  order: 2;
}

## Grid:
Grid es un sistema de diseño bidimensional que permite organizar elementos en filas y columnas. Es especialmente útil para diseñar interfaces más complejas y estructuradas. Algunos conceptos clave de Grid son:

### Contenedor de la cuadrícula:
Se crea estableciendo la propiedad display: grid; en el contenedor.

.container {
  display: grid;
}

**Definición de la cuadrícula**:
grid-template-rows y grid-template-columns definen el tamaño y la disposición de las filas y columnas.
grid-template-areas permite asignar áreas específicas a secciones de la cuadrícula.

.container {
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 2fr;
}

**Alineación**:
justify-items y align-items controlan la alineación de los elementos dentro de las celdas de la cuadrícula.
justify-content y align-content controlan la alineación de la cuadrícula dentro del contenedor.

.container {
  justify-items: center; /* o start, end, stretch, etc. */
  align-items: center; /* o start, end, stretch, etc. */
}

**Áreas de la cuadrícula**:
Se pueden asignar nombres a áreas específicas de la cuadrícula con grid-area.

.item {
  grid-area: header;
}
