<?php
    $serverName = "WDCPCMSQL01";
    $connectionInfo = array("Database"=>"CM_MMO", "CharacterSet" => "UTF-8");

    $conn = sqlsrv_connect($serverName, $connectionInfo);
