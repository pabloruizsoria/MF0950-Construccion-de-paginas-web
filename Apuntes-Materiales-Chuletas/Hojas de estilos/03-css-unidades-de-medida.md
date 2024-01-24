# Unidades de medida en CSS

## Píxeles (px)

Unidad de medida que representa un píxel en la pantalla. Es una unidad fija y no cambia con el tamaño de la fuente o la ventana del navegador. Ejemplos:

```CSS
font-size: 16px;
margin: 10px;
width: 200px;
```

## Em

Relativo al tamaño de la fuente del elemento. Un valor de 1em es igual al tamaño de la fuente actual.

```CSS
font-size: 1.2em;
margin: 1em;
```

## Porcentaje (%)

Relativo al tamaño del elemento padre. Por ejemplo, un ancho del 50% hará que un elemento ocupe la mitad del ancho de su contenedor.Ejemplos:

```CSS
width: 50%;
height: 75%;
```

## Rem

Similar a em, pero relativo al tamaño de la fuente del elemento raíz (root). Esto puede ser útil cuando quieres mantener un tamaño de fuente coherente en toda la página. Ejemplos:

```CSS
font-size: 1.5rem;
margin: 2rem;
```

## Viewport Width (vw)

Relativo al ancho del viewport. Un valor del 1vw es igual al 1% del ancho total del viewport. Ejemplos:

```CSS
width: 50vw;
```

## Viewport Height (vh)

Relativo a la altura del viewport. Un valor del 1vh es igual al 1% de la altura total del viewport. Ejemplos:

```CSS
height: 75vh;
```

## Otras:

Estas son algunas de las unidades más comunes en CSS. Hay otras unidades menos utilizadas y más especializadas, como vmin (relativo al mínimo entre el ancho y el alto del viewport) y vmax (relativo al máximo entre el ancho y el alto del viewport).