
//mis modulos
import {mostrarDatos} from "./calculadora.js";

// etiquetas
export let respuesta = document.querySelector("#respuesta");

// Boton del formularion
let boton = document.querySelector("#boton");

//función del boton
function botonFormulario(){
     let libras = document.querySelector("#inputLibras").value;
    mostrarDatos(libras)
 
}

boton.addEventListener('click',botonFormulario);

