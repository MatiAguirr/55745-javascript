// Estructura IF 
// if (true) {
//     alert("Esto si se va a ejecutar");
// }

// if (false) {
//     alert("Esto NO SE VA a ejecutar!");
// }


//Comparacion se hace con el signo ==
// EJEMPLO #1
// let cocacola = 700;
// if (cocacola == 700) { // 700 == 700 => true
//     alert("Vas a poder comprar coca");
// }

// if (cocacola == 800) { // 700 == 800 => false (no se ejecuta)
//     alert("No vas a poder comprar coca");
// }

//EJEMPLO #2
// let edad = parseInt(prompt("Ingrese su edad:"));
// if (edad >=18) {
//     alert("Vas a poder comprar ALCOHOL")
// }

// Ejemplo #3
// let tePortasteMal = "SI";
//  if (tePortasteMal == "SI") {
//     alert("Seras castigada");
//  } else {
//     alert("Esta todo piola");
//  }

// Comparacion de valores booleanos (true o false)
// let tePortasteMal = true;
//   if (tePortasteMal) {
//     alert("Seras castigada");
// } else {
//     alert("Esta todo piola")
// }

// Validando valor del prompt
// let nombre = prompt("Ingrese su nombre:").trim();

// if (nombre.length < 2) {
//     alert("No ingreso su nombre de usuario")
// } else {
//     alert("Hola, " + nombre);
// }



// Ejmeplos de IF/ELSE
// let temperatura = 37.5;
// if (temperatura < 10) {
//     alert("Hace frio");
// } else if (temperatura < 20) {
//     alert("Esta fresquito");
// } else if (temperatura < 30) {
//     alert("Esta caluroso");
// } else {
//     alert("No salgas, quedate en tu casa")
// }



// Validando valores booleanos
// let numero = 10;
// let esMayorQue5 = (numero > 5); //true

// if (esMayorQue5) {
//     alert("Es mayor que 5");
// } else {
//     alert("No, no es mayor que 5");
// }



// Operadores logicos
let numero1 = 20;
let numero2 = 30;

// Comparacion
// if (numero1 == 10) {
//     alert("Numero 1 es igual a 10!");
// }

// // Comparacion estrictamente igual === (compara valor y tipo de dato)
// if (numero1 === 10) {
//     alert("Numero 1 es estrictamente igual a 10");
// }

// Operador distinto
// if (numero1 != 20) {
//     alert("Numero 1 es distinto a 20";)
// }

// // Operador estrictamente distinto (valor y tipo de dato)
// if (numero1 !== 20) {
//     alert("Numero 1 es estrictamente distinto a 20")
// }


// Operador AND && (y)
// V y V => V
// V y F => F
// F y V => F
// F y F => F

// if ((numero1 > 10) && (numero2 >10)) {
//     alert("Se cumplen ambas condiciones");
// } else {
//     alert("No se cumplio la condicion");
// }

// Operador OR || (o)
// V o V => V
// V o F => V
// F o V => V
// F o F => F


// if ((numero1 > 10) || (numero2 >10)) {
//     alert("Se cumplen ambas condiciones");
// } else {
//     alert("No se cumplio la condicion");
// }


// Operador NOT ! (no)
// !V => F
// !F => V

// if (!(numero1 > 10)) { // invierte
//     alert("Numero 1 mayor que 10");
// }


// Doble negacion = al valor original
// if (!(!(numero1 > 10))) { 
//     alert("Numero 1 mayor que 10");
// }

// Ejemplo con Y
// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");

// if ((nombre != "") && (apellido != "")) {
//     alert("Su nombre completo es: " + nombre +" " + apellido);
// } else {
//     alert("ERROR! Ingrese su nombre y apellido");
// }

// if ((nombre == "") && (apellido == "")) {
//     alert("ERROR! Ingrese su nombre y apellido");
// } else {
//     alert("Su nombre completo es: " + nombre +" " + apellido);
// }


// Ejemplo con O
//let nombreIngresado = prompt("Ingrese su nombre");

// if ((nombreIngresado == "YANI") || (nombreIngresado == "yani")) {
//     alert("Hola Yani");
// } else {
//     alert("ERROR! El nombre ingresado no es Yani!");
// }

// Ejemplo UpperCase
// if (nombreIngresado.toUpperCase() == "YANI") {
//     alert("Hola Yani");
// } else {
//     alert("ERROR! El nombre ingresado no es Yani!");
// }

// if (((nombreIngresado != "") && (nombreIngresado == "YANI")) || (nombreIngresado == "yani")) {
//     alert("Hola Yani");
// }


// if ((nombreIngresado != "") && ((nombreIngresado == "YANI") || (nombreIngresado == "yani"))) {
//     alert("Hola Yani");
// }


// EJEMPLO APLICADO
// let peso = parseFloat(prompt("Ingrese su peso:"));
// let altura = parseFloat(prompt("Ingrese su altura:"));
// let imc = peso / (altura * altura);

// alert("Tu IMC: " + imc.toFixed(2) + "%");

// Proceso de validacion del IMC
// if (imc < 18.5) {
//     alert("Peso inferior al normal");
// } else if ((imc >= 18.5 ) && (imc <= 24.9)) {
//     alert("Normal");
// } else if ((imc >= 25) && (imc <= 29.9)) {
//     alert("Peso superior al normal");
// } else {
//     alert("Obesidad");
// }

//Mejora de ejemplo
let peso = parseFloat(prompt("Ingrese su peso:"));
let altura = parseFloat(prompt("Ingrese su altura:"));
let imc = peso / (altura * altura);

let resultado = "Tu IMC: " + imc.toFixed(2) + "%" + "\nEstado de salud: ";

// Proceso de validacion del IMC
if (imc < 18.5) {
    alert(resultado + "Peso inferior al normal");
} else if ((imc >= 18.5 ) && (imc <= 24.9)) {
    alert(resultado + "Normal");
} else if ((imc >= 25) && (imc <= 29.9)) {
    alert(resultado + "Peso superior al normal");
} else {
    alert(resultado + "Obesidad");
}
