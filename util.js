/**
 * Funciones Generales de Javascript
 */


function checkRut(rut) {
    if (rut == "" || rut == undefined)
        return false;
    // Despejar Puntos
    var valor = rut.split('.').join('')
    //console.log(valor)
    // Despejar Guión
    valor = valor.split('-').join('')
    //console.log(valor)

    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();

    // Formatear RUN
    rut = cuerpo + '-' + dv

    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if (cuerpo.length < 7) { return false; }
    if (cuerpo.length > 12) { return false; }

    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;

    // Para cada dígito del Cuerpo
    for (i = 1; i <= cuerpo.length; i++) {

        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);

        // Sumar al Contador General
        suma = suma + index;

        // Consolidar Múltiplo dentro del rango [2,7]
        if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

    }

    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);

    // Casos Especiales (0 y K)
    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;

    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado != dv) { return false; }

    return true;
}
/**
 * 
 * Función de validación de email.
 * Recibe como parametro el value del campo email. 
 */

/**
 * Encapsulamiento de REGEX
 */
var regEx = (function (){
        var _rg = {
            validaregexEmail : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            validaregexNombre : /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,} [a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,}$/,
            validaregexAlias : /(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9]).{6,}/
        };

        return {
            validaregexNombre : function(str){
                return _rg.validaregexNombre.test(str);
            },
            validaregexEmail : function(str){
                return _rg.validaregexEmail.test(str);
            },
            validaregexAlias : function(str){
                return _rg.validaregexAlias.test(str);
            }
        }
})();

/*class Validation {
    constructor(rut, nombre, alias, email, pais, ciudad, mensaje, checkbox){
        this.rut = rut;
        this.nombre = nombre;
        this.alias = alias;
        this.email = email;
        this.pais = pais;
        this.ciudad = ciudad;
        this.mensaje = mensaje;
        this.checkbox = checkbox;

    }

}*/
//datos = [rut.value, nombre.value, alias.value, email.value, pais.value, ciudad.value, mensaje.value, checkbox];

var validaDatos = (function (){
    var _vd = {
        validaEmail :''
    };

    return {
        validaEmail : function(str){
            return (email == null || email.length == 0 || email.length > 100|| /^\s+$/.test(email))? false : regEx.validaregexEmail(str)
        }
    }
})();



/*function validateEmail(email) {

    if(email == null || email.length == 0 || email.length > 100|| /^\s+$/.test(email)){
        return false;
      }
    else{
        //var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //return re.test(email);
        return regEx.validaregexEmail(email);
    }
  }*/
  validaDatos.validaEmail(email);

function validaNombre(nombre){

    //var regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,} [a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,}$/;
    if(nombre == null || nombre.length == 0 || nombre.length > 50|| /^\s+$/.test(nombre) || /"^\d+$"/.test(nombre) || regEx.validaregexNombre(nombre) == false ){
        return false;
      }
    else{
        return true;
    } 
}

function validaAlias(alias){
        //var patron = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9]).{6,}/ ;
        //return patron.test(alias);
        return regEx.validaregexAlias(alias);
}

function cuentaCheckbox(inputList){

    var numChecked = 0;
    for (var i = 0; i < inputList.length; i++) {
        if (inputList[i].type == "checkbox" && inputList[i].checked) {
            numChecked = numChecked + 1;
        }
    }
    if (numChecked != 1) {
        return false;
    }
    else return true;
}

function validaMensaje(mensaje) {
    
    if(mensaje == '' || mensaje.length == 0 || mensaje.length > 200){
        return false;
    } else return true;
}

function validaCiudad(ciudad){
    if(ciudad == '')
    {
        return false;
    }
    else return true;
}

function validaPais(pais){
    if(pais == '')
    {
        return false;
    }
    else return true;
}

function listarPais(){
    var url = "command.php?cmd=1"
    var xhr = new XMLHttpRequest()
    xhr.onload = function(){
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(xhr.response);        
            for(var i=0;i<json.length;i++){
                pais.innerHTML+="<option value='"+json[i].idpais+"'>"+json[i].nombrepais+"</option>";
            }
        }
    }
    xhr.open("GET",url)
    xhr.send()
}

function listarCiudad(getpais){
    var url = "command.php?cmd=2&codpais="+getpais
    var xhr = new XMLHttpRequest()
    xhr.onload = function(){
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(xhr.responseText);
            ciudad.innerHTML="";
            ciudad.innerHTML="<option value='' disabled selected>Selecciona una Ciudad </option>";
            for(var f=0;f<json.length;f++){
                ciudad.innerHTML+="<option value='"+json[f].idciudad+"'>"+json[f].nombreciudad+"</option>";
            }
        }
    }
    xhr.open("GET",url)
    xhr.send()
}


function listarChat(){
    var url = "command.php?cmd=4"
    var xhr = new XMLHttpRequest()
    xhr.onload = function(){
        if (this.readyState == 4 && this.status == 200) { 
            //console.log(xhr.response);
            tablamensajes.innerHTML="";
            tablamensajes.innerHTML='<tr>'+
                                    '<td style="text-align: center;width:100px"><b>Alias</b></td>'+
                                    '<td style="width:5px" border="1px"></td>'+
                                    '<td style="text-align: center;width:100px"><b>Pais</b></td>'+
                                    '<td style="width:5px"></td>'+
                                    '<td style="text-align: center;width:100px"><b>Fecha Hora</b></td>'+
                                    '<td style="width:5px"></td>'+
                                    '<td style="text-align: center;width:350px"><b>Mensaje</b></td>'+
                                    '<td style="width:5px"></td>'+
                                    '<td style="text-align: center;width:100px"><b>Eliminar</b></td>'+
                                    '</tr>';
            if(xhr.response !=""){
                var json = JSON.parse(xhr.response);
                for(var i=0;i<json.length;i++){
                    tablamensajes.innerHTML+="<tr style='color:"+json[i].nombrecolor+
                    "'><td style='text-align: center'>>>>"+json[i].alias1+"</td><td></td><td style='text-align: center'>"+json[i].nombrepais+
                    "</td><td></td><td style='text-align: center'>"+json[i].fecha+"</td><td></td><td style='text-align: center'>"+json[i].mensaje+
                    "</td><td></td><td style='text-align: center'><a href='borrarMensaje("+json[i].idchat+")'>Eliminar</a></td></tr>";
                }
            }
        }
    }
    xhr.open("GET",url)
    xhr.send()
}

function listarConectados(){
    var url = "command.php?cmd=5"
    var xhr = new XMLHttpRequest()
    xhr.onload = function(){
        if (this.readyState == 4 && this.status == 200) {
            tablaconectados.innerHTML="";
            tablaconectados.innerHTML='<th colspan="5">'+
                                        '<hr>'+
                                        '</th>'+
                                        '<tr>'+
                                        '<td style="width:50px">'+
                                        '</td>'+
                                        '<td style="width:150p">'+
                                        '<label for="t3nombreplan"><b>Usuarios</b></label>'+
                                        '</td>'+
                                        '<td style="width:100px">'+
                                        '</td>'+
                                        '<td style="width:150px">'+
                                        '<label for="t3porcentaje"><b>Conectados</b></label>'+
                                        '</td>'+
                                        '<td>'+
                                        '</td>'+
                                        '</tr>';
            if(xhr.response !=""){
                var json = JSON.parse(xhr.response);
                for(var i=0;i<json.length;i++){
                    tablaconectados.innerHTML+="<th colspan='5'><hr></th><tr><td></td><td style='text-align: center'>"+json[i].nombrepais+
                    "</td><td></td><td style='text-align: center'>"+json[i].conectados+"</td></tr>";
                }
            }else{
                tablaconectados.innerHTML="";
                tablaconectados.innerHTML='<th colspan="5">'+
                                        '<hr>'+
                                        '</th>'+
                                        '<tr>'+
                                        '<td style="width:50px">'+
                                        '</td>'+
                                        '<td style="width:150p">'+
                                        '<label for="t3nombreplan"><b>Usuarios</b></label>'+
                                        '</td>'+
                                        '<td style="width:100px">'+
                                        '</td>'+
                                        '<td style="width:150px">'+
                                        '<label for="t3porcentaje"><b>Conectados</b></label>'+
                                        '</td>'+
                                        '<td>'+
                                        '</td>'+
                                        '</tr>';
            }
        }
    }
    xhr.open("GET",url)
    xhr.send()
}
function realizaEnvio(datos){
    var datos2 = datos
    var formData = new FormData();
    formData.append('rut',datos2[0]);
    formData.append('nombre',datos2[1]);
    formData.append('alias',datos2[2]);
    formData.append('email',datos2[3]);
    formData.append('pais',datos2[4]);
    formData.append('ciudad',datos2[5]);
    formData.append('mensaje',datos2[6]);
    formData.append('checkbox',datos2[7]);
    var url = "command.php?cmd=3";
    var xhr = new XMLHttpRequest()
    //console.log(url);
    xhr.onload = function(){
        if (this.readyState == 4 && this.status == 200) {
            //alert("Se realizó con exito el agregar");
            console.log(xhr.response);

            if(xhr.response == 1){
                document.getElementById("formulario").reset();
                alert("Agregado con éxito");
                listarChat()
                listarConectados()
            } else {
                alert(xhr.response);
            }
        }
    }
    xhr.open("POST",url)
    xhr.send(formData)
}

function borrarMensaje(id)
{
    var idborrar = id;
    var formData = new FormData();
    formData.append('idborrar',idborrar);
    var url = "command.php?cmd=6";
    var xhr = new XMLHttpRequest()
    xhr.onload = function(){
        if (this.readyState == 4 && this.status == 200) {
            //console.log(xhr.response)
            alert("Chat Eliminado");
            listarChat()
            listarConectados()
        }

    }
    xhr.open("POST",url)
    xhr.send(formData)
}
