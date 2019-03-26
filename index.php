<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO 8859-1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Formulario de Suscripción</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
</head>
<body>
    <form action="#" method="get" id="formulario">
        <table style="margin:auto;">
            <thead>
                <tr>
                    <th colspan="3" style="text-align: center, font-size:large"><b>Chat</b></th>
                </tr>
                <tr style="height : 30px;">
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <label for="nombre">Nombre y Apellido :</label>
                    </td>
                    <td style="width:50px">
                    </td>
                    <td>
                        <label for="alias">Alias :</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input name="nombre"  type="text" id="nombre"> 
                    </td>
                    <td>
                    </td>
                    <td>
                        <input name="alias"  type="text" id="alias"> 
                    </td>
                    <td style="width:100px">
                    </td>
                    <td colspan="5" rowspan="10">
                        <table>
                            <thead>
                            <!--<th colspan="5">
                                <hr>
                            </th>
                            <tr>
                                <td style="width:50px">
                                </td>
                                <td style="width:150p">
                                    <label for="t3nombreplan"><b>Usuarios</b></label>
                                </td>
                                <td style="width:100px">
                                </td>
                                <td style="width:150px">
                                    <label for="t3porcentaje"><b>Conectados</b></label>
                                </td>
                                <td>
                                </td>
                            </tr>-->
                            </thead>
                            <tbody id="tablaconectados">                             
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr style="height : 10px;">
                </tr>
                <tr>
                    <td>
                        <label for="rut">Rut :</label>
                    </td>
                    <td style="width:50px">
                    </td>
                    <td>
                        <label for="email">Correo Electrónico :</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input name="rut"  type="text" id="rut"> 
                    </td>
                    <td>
                    </td>
                    <td>
                        <input name="email"  type="text" id="email"> 
                    </td>
                </tr>
                <tr style="height : 10px;">
                </tr>
                <tr>
                    <td>
                        <label for="pais">Pais :</label>
                    </td>
                    <td style="width:50px">
                    </td>
                    <td>
                        <label for="ciudad">Ciudad :</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select name="pais"  type="select" id="pais">
                            <option value="" disabled selected>Selecciona un opción</option>
                        </select>
                    </td>
                    <td>
                    </td>
                    <td>
                        <select name="ciudad"  type="select" id="ciudad">
                            <option value="" disabled selected>Selecciona una opción</option>
                        </select>
                    </td>
                </tr>
                <tr style="height : 10px;">
                </tr>
                <tr>
                    <td colspan="3">
                        <label for="color">Color :</label>
                        <input type="checkbox" name="checkbox" id="rojo" value="1">Rojo
                        <input type="checkbox" name="checkbox" id="negro" value="2">Negro
                        <input type="checkbox" name="checkbox" id="verde" value="3">Verde
                    </td>
                </tr>
                <tr style="height : 10px;">
                <tr>
                    <td colspan="3">
                        <label for="mensaje">Mensaje :</label>
                    </td>
                </tr>
                <tr style="height : 10px;">
                <tr>
                    <td colspan="3">
                        <textarea id="mensaje" name="mensaje" rows="4" cols="50" style="resize:none" placeholder="Ingrese Texto"></textarea>
                    </td>
                </tr>
                <tr style="height : 15px;">
                </tr>
                <tr>
                    <td>
                    <button type="button" id="btn-enviarmensaje" name="btn-enviarmensaje" >Enviar</button>
                    </td>
                </tr>
                <tr style="height : 30px;">
                </tr>
                <tr colspan="10">
                    <td colspan="10">
                        <table >
                            <thead>
                                <tr>
                                    <td class="encerrar" colspan="10" style="text-align: center">
                                        <label for="t3nombreplan" style="font-size:large"><b>Conversación</b></label>
                                    </td>
                                </tr> 
                            </thead>
                            <tbody id="tablamensajes">
                                <tr>
                                    <td style="text-align: center;width:100px"><b>Alias</b></td>
                                    <td style="width:5px" border='1px'></td>
                                    <td style="text-align: center;width:100px"><b>Pais</b></td>
                                    <td style="width:5px"></td>
                                    <td style="text-align: center;width:100px"><b>Fecha Hora</b></td>
                                    <td style="width:5px"></td>
                                    <td style="text-align: center;width:350px"><b>Mensaje</b></td>
                                    <td style="width:5px"></td>
                                    <td style="text-align: center;width:100px"><b>Eliminar</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr style="height : 30px;">
                </tr>
                <tr>
                    <td>
                    <button type="button" id="btn-descargarxml" name="btn-descargarxml">Descargar XML</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</body>
<footer>
    <script src="js/util.js"></script>
    <script src="js/controlador.js"></script>
</footer>
</html>
