let nombre = "Matias Aguirre"
console.log(nombre);
let encabezado = document.getElementById("encabezado")
encabezado.innerHTML = nombre;

document.getElementById("parrafo1").innerHTML = "Estamos en el <b>Curso de JavaScript</b>";

function saludar() {
    let texto = "Hola! Estamos realizando el Curso de JavaScript en Coderhouse!"
    alert(texto);
    document.body.append(texto);
}

document.getElementById("boton").addEventListener("click", saludar);

let nombrecompleto = prompt("Ingrese su nombre")

if (nombrecompleto == "Matias") {
    alert("Hola Mati! Crack");
} else {
    alert("Hola, " + nombrecompleto);
}
