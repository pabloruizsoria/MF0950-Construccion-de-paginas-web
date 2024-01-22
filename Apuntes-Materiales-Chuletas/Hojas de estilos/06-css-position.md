# Atributo position

El atributo position en CSS determina el método de posicionamiento de un elemento en relación con su contenedor o con el viewport (ventana del navegador). 

Estos valores de position ofrecen diversas formas de controlar la ubicación y el comportamiento de los elementos en una página web. La elección del valor depende de los requisitos de diseño y del efecto deseado.

Algunos valores son:

## static:
Este es el valor por defecto.
El elemento se posiciona de acuerdo con el flujo normal del documento.
Las propiedades top, right, bottom, y left no tienen efecto.
```CSS
.element {
  position: static;
}
```

## relative:
El elemento se posiciona en relación con su posición normal.
Puedes utilizar las propiedades top, right, bottom, y left para ajustar su posición.
```CSS
.element {
  position: relative;
  top: 10px;
  left: 20px;
}
```

## absolute:
El elemento se posiciona en relación con el elemento padre más cercano que tiene una posición distinta de static.
Si no hay un padre posicionado, se posiciona en relación con el elemento <html>.
Las propiedades top, right, bottom, y left se utilizan para ajustar su posición.
```CSS
.element {
  position: absolute;
  top: 30px;
  left: 50px;
}
```

## fixed:
El elemento se posiciona en relación con la ventana del navegador (viewport).
Permanece fijo incluso si se realiza un desplazamiento en la página.
Las propiedades top, right, bottom, y left se utilizan para ajustar su posición.
```CSS
.element {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

## sticky:
El elemento se posiciona según el flujo normal hasta que alcanza un determinado punto mientras se desplaza.
Luego se "pega" a esa posición.
Las propiedades top, right, bottom, y left se utilizan para especificar el punto de "pegajosidad".
```CSS
.element {
  position: sticky;
  top: 20px;
}
```