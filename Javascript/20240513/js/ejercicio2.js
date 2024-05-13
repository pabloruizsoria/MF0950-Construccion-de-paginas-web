var precio = prompt("Dime el precio");
var descuento = prompt("Dime el descuento");

//Faltan las comprobaciones

console.log("El precio es " + precio);
console.log("El descuento (%) es " + descuento);

var descuentoDinero = precio * descuento / 100;

console.log("El descuento (en €) es " + descuentoDinero);
var precioFinal = precio - descuentoDinero;
console.log("El precio final es " + precioFinal);