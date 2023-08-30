/* Estructura bucle FOR
FOR: lleva entre parentesis 3 condiciones q SI O SI deben estar aolicadas

for(DESDE ; HASTA ; MIENTRAS TANTO / ACTUALIZAR){

}*/

// for(let i = 0; i < 10; i = i+5){
//     console.log(i);
// }

// EJEMPLOS
// let numero = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicar"))

// for(let i = 1; i <= 10; i++){
//     let resultado = numero * i

//     alert(`${numero} * ${i} = ${resultado}`);
// }

// for(let turno = 1; turno < 5; turno++){
//     let nombre = prompt("Ingrese su nombre");
//     alert(`Turno #${turno} asignado a paciente: ${nombre}`);
// }

//Sentencia BREAK en bucle FOR 

// lo q hace "BREAK" es quebrar o finalizar el bucle
// for(let i = 1; i <= 10; i++){
//     //antes del "i" voy a colocar un if
//     if(i === 5){
//         break;
//     } console.log(i);
// }

// for(let i = 1; i <= 5; i++){
//     let tieneCovid = prompt("Tiene Covid?")
//     if (tieneCovid === "si"){
//         alert("Usted sera atendido en la brevedad")
//         break
//     } console.log(i);
// }

// Sentencia continue

// for(let i = 1; i<=10; i++){

//     if(i === 5){
//         continue
//     } console.log(i);
// }

// for(let i = 1; i<=60; i++){
//     if(i % 2 === 1){
//         continue
//     } console.log(i);
// }


// Bucle WHILE, bucle por condicion
// while(condicion){
//    codigo a ejecutar si la condicion se cumple
//}

// let repetir = true

// while(repetir){
//     console.log("hola");
// } // ESTE CODIGO REVIENTA LA RAM DE LA PC, NO EJECUTAR!!


// let usuario = prompt("Ingrese su usuario");

// while(usuario != "pepito"){
//     alert("Erro! Usted no es pepito");
//     usuario = prompt("Ingrese su usuario");
// } alert("Bienvenido Pepito!")

// let entrada = prompt("Ingrese un dato");

// while(entrada != "ESC"){
//     alert(`Usted ingreso ${entrada}`)

//     entrada = prompt("Ingrese un dato");
// }


// DO WHILE ejecuta al menos una vez y despues cierra o no
// do{
//     codigo que se ejecuta al menos una vez
// } while(condicion)

let repetir = false

// while(repetir){
//     console.log("entramos");
// }

// do{
//     console.log("entramos");
// }while(repetir)

// Sentencia SWITCH

// switch(valor){
//     caso valor1: codigo a ejecutar en caso de que el valor sea true o valor1 break;
//     caso valor2: codigo a ejectar en caso de que el valor sea true o valor2 break;
    //     .
    //     .
    //     .
    //     .
    //     .
    //     .
    // default: caso por defecto que se ejecuta si ninguna condicion "case/caso" se cumple break;
// }


// let moneda = prompt("-ingrese su moneda");

// switch(moneda){
//     case "cop": alert("Moneda de colombia")
//     break;
//     case "ars": alert("Moneda de argentina")
//     break;
//     case "usd": alert("Moneda de estados unidos")
//     break;
//     default: alert("No se renoce la moneda")
//     break;
// }

// GENERALA
// desglosar el programa que quiero crear  


let cantidaMonedas;
let cantidadTiros;
let ganados = 0;

alert("Bienvenidos a nuestro tragamonedas")

while(true){
    cantidaMonedas = prompt("Ingrese una cantidad de monedas (Maximo 10 monedas)");
    
    if(cantidaMonedas >=1 && cantidaMonedas <=10){
        alert(`Ya puede jugar! Tiene ${cantidaMonedas} tiros`)

        for(cantidadTiros = 0; cantidadTiros < cantidaMonedas; cantidadTiros++){
            let num1 = Math.floor(Math.random() * 3) +1;
            let num2 = Math.floor(Math.random() * 3) +1;
            let num3 = Math.floor(Math.random() * 3) +1;
                if(num1 === num2 && num1 === num3){
                    alert(`${num1} ${num2} ${num3} \nGanaste esta tirada!`);
                    ganados++;
                }else{
                alert(`${num1} ${num2} ${num3} \nSegui participando`);
                }
            }
        if(ganados > 2){
            alert(`Felicitacone! Ganaste ${ganados} veces`);
        }else{
            alert("Mejor suerte la proxima vez");
        }
        break;
    } else{
        alert("Ingrese cantidad valida!");
        continue;
    } 
        
} 


