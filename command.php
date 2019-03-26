<?php include 'conexion.php';


$cmd = pg_escape_string($_REQUEST['cmd']);
//$codregion = pg_escape_string($_REQUEST['codregion']);

switch ($cmd) {
    case 1:
        obtenerPais();
        break;
    case 2:
        obtenerCiudad();
        break;
    case 3:
        insertarEnvio();
        break;
    case 4:
        obtenerListaChat();
        break;
    case 5:
        obtenerTotalConectados();
        break;
    case 6:
        borrarChat();
        break;
    default:
        die('Comando no válido');
}

function obtenerPais()
{
    $conexion = conectarDB();
    $query = "SELECT * FROM pais ORDER BY idpais asc ";
    $resultado = pg_query($conexion, $query);
    $error = pg_last_error($conexion);
    if ($error != '') {
        die($error);
    }
    $json = array();
    $nr = pg_num_rows($resultado);
    if ($nr > 0) {
        while ($filas = pg_fetch_array($resultado)) {
            $json[] = array(
                'idpais' => $filas['idpais'],
                'nombrepais' => utf8_encode($filas['nombrepais']),
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    } else {
        echo "No hay datos";
    }
}

function obtenerCiudad()
{
    $conexion = conectarDB();
    $codpais = pg_escape_string($_REQUEST['codpais']);
    $query = "SELECT * FROM ciudad WHERE idpais =$codpais";
    $resultado = pg_query($conexion, $query);
    $error = pg_last_error($conexion);
    if ($error != '') {
        die($error);
    }
    $json = array();
    $nr = pg_num_rows($resultado);
    if ($nr > 0) {
        while ($filas = pg_fetch_array($resultado)) {
            $json[] = array(
                'idciudad' => $filas['idciudad'],
                'nombreciudad' => utf8_encode($filas['nombreciudad']),
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    } else {
        echo "No hay datos";
    }
};

function obtenerTotalConectados()
{
    $conexion = conectarDB();
    $query = "SELECT * FROM vw_totalchats";
    $resultado = pg_query($conexion, $query);
    $error = pg_last_error($conexion);
    if ($error != '') {
        die($error);
    }
    $json = array();
    $nr = pg_num_rows($resultado);
    if ($nr > 0) {
        while ($filas = pg_fetch_array($resultado)) {
            $json[] = array(
                'nombrepais' => $filas['nombrepais'],
                'conectados' => $filas['conectados'],
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    } else {
        echo "No hay datos";
    }
}


function obtenerListaChat()
{
    $conexion = conectarDB();
    $query = "SELECT * FROM vw_listachats";
    $resultado = pg_query($conexion, $query);
    $error = pg_last_error($conexion);
    if ($error != '') {
        die($error);
    }
    $json = array();
    $nr = pg_num_rows($resultado);
    if ($nr > 0) {
        while ($filas = pg_fetch_array($resultado)) {

            $json[] = array(
                'idchat' => $filas['idchat'],
                'alias1' => utf8_encode($filas['alias1']),
                'nombrepais' => $filas['nombrepais'],
                //'fecha' => date("d-m-Y H:i:s ", $filas['fecha']),
                'fecha' => $filas['fecha'] = date("d-m-Y H:i", strtotime($filas['fecha'])),
                'mensaje' => utf8_encode($filas['mensaje']),
                'nombrecolor' => $filas['nombrecolor'],
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    } else {
        //echo "No hay datos";
    }
}

function insertarEnvio()
{
    console.log(rut.value, nombre.value, alias.value, email.value, pais.value, ciudad.value, mensaje.value, checkbox);

    $conexion = conectarDB();
    $rut = $_POST['rut'];
    $nya = $_POST['nombre'];
    $alias = $_POST['alias'];
    $email = $_POST['email'];
    $idpais = $_POST['pais'];
    $idciudad = $_POST['ciudad'];
    $mensaje = utf8_decode($_POST['mensaje']);
    $idcolor = $_POST['checkbox'];

    $query = "SELECT fn_chat_iu('$nya','$alias','$rut','$email',$idpais,$idciudad,$idcolor,'$mensaje')";
    $resultado = pg_query($conexion, $query);
    $error = pg_last_error($conexion);
    //$error2 = pg_last_error($resultado);
    

    if ($error != '') {
        echo ($error);
    } else {
        echo 1;
    }

}



function borrarChat()
{
    $conexion = conectarDB();
    $idborrar = $_POST['idborrar'];
    $query = "SELECT fn_chat_d($idborrar)";
    $resultado = pg_query($conexion, $query);
    $error = pg_last_error($conexion);
    if ($error != '') {
        die($error);
    }
    if ($resultado == true) {
    } else {
        // echo "Eliminación no fue realizada"
    }
}
