// mi librería
import {respuesta} from "./main.js";

// función
export function mostrarDatos(libras){

    var operacion = (libras * (1/ 2.20462));
    

    respuesta.innerHTML= '<p> Resultado  ' + operacion.toFixed(1) + '  kilos </p>'; 

}

