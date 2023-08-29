// Variables
// let unaVariable;
// unaVariable = "Matias no esta"; // Asignar el texto MATIAS NO ESTA a la variable unaVariable
// // let unaVariable = "Matias no esta"; // Esto es equivalente. Declarar y asignar el texto a la variable unaVariable



// let valor1 = 10; // Esto es un Number o numero entero
// let valor2 = "Matias"; // Esto es un String va entre comillas
// const dolar = 605; // Las constantes se definen una vez y no se pueden repetir

// console.log(valor1); 
// console.log(valor2); 
// console.log(dolar); 

// valor1 = 20;
// valor2 = 50.25; // Valor decimal va con punto "."


// console.log(valor1);
// console.log(valor2);
// console.log(dolar);

// Operacioes Basicas Numericas
// let numeroA = 10;
// let numeroB = 30;
// const numeroC = 50;

// // Suma
// let resultadoSuma = numeroA + numeroB;
// console.log("SUMA: " + resultadoSuma); // El + va a contener el string con el numero

// // Resta
// let resultadoResta = numeroA - numeroB;
// console.log("RESTA: " + resultadoResta);

// // Multiplicacion
// let resultadoMulti = numeroA * numeroB;
// console.log("MULTIPLICAICON: " + resultadoMulti);

// // Division
// let resultadoDivison = numeroC / numeroB;
// console.log("DIVISION: " + resultadoDivison);


//Operaciones Basicas de TEXTO 
// let textoA = "Curso";
// let preposicion = "de";
// let textoB = "JavaScript";
// let espacio = " ";
// let costo = 60000;

// // Concatener
// alert(textoA + espacio + preposicion + espacio + textoB);
// console.log(textoA + espacio + textoB + espacio + "=> $" + costo);


// Prompts 
// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");
// let nombreCompleto = nombre + " " + apellido;
// alert("Tu nombre completo es: " + nombreCompleto)


// let peso = parseFloat(prompt("Ingrese su Peso:")); // Los prompts guardan los datos en forma STRING. Deberia convertir ese String a un valor Entero
// peso = peso + 2;

// let peso = parseFloat(prompt("Ingrese su Peso:")); // Los prompts guardan los datos en forma STRING. Deberia convertir ese String a un valor Float (decimal)
// peso = peso + 2;
// alert("Tu peso es: " + peso);

// let peso = parseFloat(prompt("Ingrese su peso: "));
// console.log("Su peso es: " + peso + " kg. ");

let estatura = parseFloat(prompt("Ingrese su Altura"));
let peso = parseFloat(prompt("Ingrese su Peso"));
let resultado = peso/(estatura*estatura);
alert("Tu IMC es: " + resultado);