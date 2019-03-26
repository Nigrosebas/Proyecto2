/**
 * Código Js del Formulario
 */


listarPais()
listarChat()
listarConectados()
//listarSuscripciones()
//listarPorcentajes()
var nombre      = document.getElementById("nombre");
var alias       = document.getElementById("alias");
var rut         = document.getElementById("rut");
var email       = document.getElementById("email");
var pais      = document.getElementById("pais");
var mensaje      = document.getElementById("mensaje");
var ciudad      = document.getElementById("ciudad");
var inputList   = document.getElementsByName("checkbox");

var enviar = document.getElementById("btn-enviarmensaje");
var descargarXML = document.getElementById("btn-descargarxml");

pais.onchange = function(){
  var getpais = pais.value;
  //console.log(getregion);
  listarCiudad(getpais);
}

enviar.onclick = function () {

    var alerta=0;

    /**
     * Validador de Nombre
     */
    if(!validaNombre(nombre.value)){
      //alerta = 6;
      alert('Nombre no debe ir vacío o lleno de espacios en blanco')
      return false;
    }

    /**
     * Validador de Alias
     */

    if(!validaAlias(alias.value)){
      //alerta= 5;
      alert('Alias Inválido')
      return false;
    }


    /**
     * Validador de Rut
     */
    if(!checkRut(rut.value)){
      //alerta = 4;
      alert('Rut Inválido')
      return false;
    }

    /**
     * Validador de Mail
     */

    if(!validateEmail(email.value)){
      //alerta = 3;
      alert('Mail Inválido')
      return false;
    }


    /**
     * Valida Pais
     */
    
    if(!validaPais(pais.value)){
      alerta = 8;
      alert('Selecciona un Pais')
      return false;
    }

    /**
     * Valida Ciudad
     */

    if(!validaCiudad(ciudad.value)){
      //alerta = 7;
      alert('Selecciona una Ciudad')
      return false;
    }

    /**
     * Valida los Checkbox
     */
    if(cuentaCheckbox(inputList)==false){
      //alerta = 1;
      alert('Debes seleccionar al menos 1 opcion de color')
      return false;
    }

    /**
     * Validador de Mensaje
     */

    if(!validaMensaje(mensaje.value)){
        //alerta= 5;
        alert('Mensaje inválido')
        return false;
      }





    else{
        for(var i=0; inputList[i]; ++i){
            if(inputList[i].checked){
                 checkbox = inputList[i].value;
            }
      }
        console.log(rut.value, nombre.value, alias.value, email.value, pais.value, ciudad.value, mensaje.value, checkbox);
        datos = [rut.value, nombre.value, alias.value, email.value, pais.value, ciudad.value, mensaje.value, checkbox];
        //let validacion = new Validation(rut.value, nombre.value, alias.value, email.value, pais.value, ciudad.value, mensaje.value, checkbox);
        //console.log(validacion.rut);
        //realizaEnvio(datos);

    }
};
