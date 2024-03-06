# CSS3 avanzado: transform, transition y animation

Introducción a estas propiedades

## transform:
La **propiedad transform** permite aplicar transformaciones a un elemento en el espacio 2D o 3D. Puede incluir varias funciones como *translate(), rotate(), scale()*, y más.

```CSS
.transform-example {
  transform: rotate(45deg) scale(1.5);
}
```

En este ejemplo, el elemento con la clase transform-example se rotará 45 grados y se escalará al 150% de su tamaño original.

## transition:

La **propiedad transition** permite suavizar los cambios en las propiedades CSS durante un período de tiempo determinado. Es útil para crear efectos de transición suaves.

```CSS
.transition-example {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: width 1s ease-in-out;
}

.transition-example:hover {
  width: 200px;
}
```

En este ejemplo, cuando el mouse se posa sobre el elemento con la clase transition-example, la propiedad width cambia su valor durante 1 segundo con un efecto suave.

## animation:
La **propiedad animation** permite crear animaciones más complejas y personalizadas mediante la definición de keyframes.

```CSS
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.animation-example {
  animation: bounce 2s infinite;
}
```

En este ejemplo, se define una animación llamada bounce que hace que el elemento con la clase animation-example rebote hacia arriba y abajo de manera continua durante 2 segundos.