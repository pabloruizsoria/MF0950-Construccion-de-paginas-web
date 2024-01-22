# display vs position

En resumen, display se centra en el formato interno y la presentación del contenido, mientras que position se centra en la ubicación y el posicionamiento de los elementos en la página. Ambas propiedades son herramientas esenciales para controlar el diseño y la apariencia en CSS. Las principales diferencias son:

## 1. Propósito:
display: Controla el modelo de formato utilizado por un elemento. Define cómo se debe mostrar el contenido del elemento en términos de su tipo y relación con otros elementos. Los valores de display incluyen block, inline, flex, grid, etc.

position: Controla el método de posicionamiento de un elemento en relación con su contenedor, la ventana del navegador (viewport), u otro elemento. Los valores de position incluyen static, relative, absolute, fixed, y sticky.

## 2. Aplicación:
display: Se aplica al contenedor y determina cómo el contenido interno de ese contenedor se formatea y se muestra. Por ejemplo, display: flex; convierte al contenedor en un contenedor flexible, mientras que display: block; hará que el contenedor sea un bloque.

```CSS
.container {
  display: flex;
}

.paragraph {
  display: block;
}
```

position: Se aplica al propio elemento y determina cómo ese elemento se posiciona en relación con su entorno. Por ejemplo, position: relative; posiciona el elemento en relación con su posición normal, y position: absolute; lo posiciona en relación con el contenedor más cercano que tiene una posición diferente a static.

```CSS
.relative-element {
  position: relative;
  top: 10px;
  left: 20px;
}

.absolute-element {
  position: absolute;
  top: 30px;
  left: 50px;
}
```

## 3. Compatibilidad:
display: Es compatible con una variedad de valores y funciona en la mayoría de los navegadores modernos. Algunos valores, como flex y grid, pueden tener problemas en navegadores más antiguos.

position: Es compatible con todos los navegadores modernos. Sin embargo, algunos valores como sticky pueden tener comportamientos diferentes en navegadores más antiguos.

## 4. Interacción:
display: Se utiliza para cambiar la disposición y el formato del contenido dentro de un elemento. Es más sobre el diseño interno del elemento y cómo fluye su contenido.

position: Se utiliza para cambiar la ubicación y el posicionamiento de un elemento en relación con su entorno. Es más sobre cómo el elemento interactúa con otros elementos y su posición en la página.