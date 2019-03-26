<?php

function conectarDB()
{
    // detalles de la conexion
    $conn_string = "host=192.168.1.11 port=5432 dbname=svasquez user=candidato password=can6521";

    // establecemos una conexion con el servidor postgresSQL
    $dbconn = pg_connect($conn_string);

    // Revisamos el estado de la conexion en caso de errores.
    if (!$dbconn) {
        echo "Error: No se ha podido conectar a la base de datos\n";
    } else {
        //echo "Conexión exitosa\n";
        return $dbconn;
    }
}
