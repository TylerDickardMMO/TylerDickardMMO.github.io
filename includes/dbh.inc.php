<?php
    $serverName = "WDCPCMSQL01";
    $connectionInfo = array("Database"=>"CM_MMO");

    $conn = sqlsrv_connect($serverName, $connectionInfo);
