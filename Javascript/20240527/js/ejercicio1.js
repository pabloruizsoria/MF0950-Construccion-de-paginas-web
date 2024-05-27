function escribeEnConsola(texto){
    console.log(texto);
}

function suma(oper1, oper2){
    var resultado = parseInt(oper1) + parseInt(oper2);
    escribeEnConsola("El resultado de la suma de " + oper1 + " y " + oper2 + " es: " + resultado);
}

function resta(oper1, oper2){
    var resultado = parseInt(oper1) - parseInt(oper2);
    escribeEnConsola("El resultado de la resta de " + oper1 + " y " + oper2 + " es: " + resultado);
}

function multiplica(oper1, oper2){
    var resultado = parseInt(oper1) * parseInt(oper2);
    escribeEnConsola("El resultado de la multiplicación de " + oper1 + " y " + oper2 + " es: " + resultado);
}

function divide(oper1, oper2){
    var resultado = parseInt(oper1) / parseInt(oper2);
    escribeEnConsola("El resultado de la división de " + oper1 + " y " + oper2 + " es: " + resultado);
}

function opera(queHacer, dato1, dato2){
    if(queHacer == "+"){
        suma(dato1, dato2);
    }else if(queHacer == "-"){
        resta(dato1, dato2);
    }else if(queHacer == "*"){
        multiplica(dato1, dato2);
    }else if(queHacer == "/"){
        divide(dato1, dato2);
    }
}

var a = prompt("Indica un operando");
var b = prompt("Indica otro operando");
var operador = prompt("Indica la operación a realizar (+, -, *, /)");

opera(operador, a, b);