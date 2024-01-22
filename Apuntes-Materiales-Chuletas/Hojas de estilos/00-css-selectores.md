Los selectores en CSS son patrones que se utilizan para seleccionar y aplicar estilos a elementos específicos en una página web. Hay varios tipos de selectores que permiten apuntar a diferentes elementos de manera eficiente.

1. Selector de Tipo:

Selecciona todos los elementos de un tipo específico.

Ejemplo:
```CSS
p {
  color: blue;
}
```
2. Selector de Clase:
Selecciona todos los elementos que tienen un atributo de clase específico.

Ejemplo:
```CSS
.button {
  background-color: #008000;
}
```

3. Selector de ID:
Selecciona un elemento con un atributo de ID específico. (Nota: El uso de ID en  se considera menos flexible que las clases y se recomienda evitarlo cuando sea posible).

Ejemplo:
```CSS
#header {
  font-size: 24px;
}
```

4. Selector Universal:
Selecciona todos los elementos en el documento.

Ejemplo:
```CSS
* {
  margin: 0;
  padding: 0;
}
```

5. Selector de Atributo:

Selecciona elementos que tienen un atributo específico.

Ejemplo:
```CSS
input[type="text"] {
  border: 1px solid #ccc;
}
```

También podemos seleccionar elementos por su atributo cuando el mismo comienza por un texto dado. En el apartado 11 se trata de nuevo:

```CSS
input[class^="palabra"] {
  border: 1px solid #ccc;
}

p[id^="otrapalabra"] {
  border: 1px solid #ccc;
}

```

6. **Selector Descendente**:
Selecciona un elemento que es descendiente de otro.

Ejemplo:
```CSS
article p {
  color: #333;
}
```

7. **Selector de Clase Anidado**:
Selecciona elementos que tienen una clase específica **dentro** de otro elemento.

Ejemplo:
```CSS
nav .menu-item {
  font-weight: bold;
}
```

```HTML
<nav>abc <p class="menu-item">a esta parte es a la que se refiere el selector</p> xyz</nav>
```

8. Selector de Pseudoclase:
Selecciona un estado específico de un elemento.

Ejemplo:
```CSS
a:hover {
  color: red;
}
```

9. Selector de Pseudo-elemento:
Selecciona partes específicas de un elemento.

Ejemplo:
```CSS
p::first-line {
  font-weight: bold;
}
```

10. Selector de Combinador:
Combina diferentes selectores para apuntar a elementos más específicos.

Ejemplo:
```CSS
h2 + p {
  margin-top: 10px;
}
```

11. Selector de Atributo de Subcadena:
Selecciona elementos que tienen un atributo cuyo valor contiene una subcadena específica.

Ejemplo:
```CSS
input[type^="text"] {
  border: 1px solid #ccc;
}
```

12. Selector de Clasificación:
Selecciona el primer y último elemento de su tipo.

Ejemplo:
```CSS
li:first-child {
  color: red;
}

li:last-child {
  color: blue;
}
```

13. Media queries

Nos permiten establecer comportamientos para diferentes resoluciones de pantalla

Ejemplo:
```CSS
@media only screen and (max-width: 600px) {
  /* estilos para pantallas con un ancho máximo de 600 píxeles */
}
```

También pueden realizarse combinaciones mas complejas como:

```CSS
@media only screen and (min-width: 768px) and (orientation: landscape) {
  /* estilos para pantallas con un ancho mínimo de 768 píxeles en orientación apaisada */
}
```


14. Comentarios en CSS

En CSS los comentarios se escriben con los símbolos // o /**/

Ejemplo:
```CSS
p{
  color: blue;
  // color: red;
  /*background-color:pink;
  text-size: 15px;*/
}
```