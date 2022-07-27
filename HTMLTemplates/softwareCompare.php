<script>
<?php
    include_once("../includes/dbh.inc.php");
    $oldDevName = $_COOKIE['oldModelNumber'];
    $js_array = array();
    $sql = "
    SELECT 
        SYS.Name0 AS Name,
        InstallSoftware.ProductName0 AS ProductName,
        InstallSoftware.ProductVersion0 AS ProductVersion
    FROM
        v_R_System AS SYS
    JOIN v_GS_INSTALLED_SOFTWARE InstallSoftware ON InstallSoftware.ResourceID = SYS.ResourceID
    WHERE SYS.Name0= ?";
    $stmt = sqlsrv_prepare($conn, $sql, array(&$oldDevName));
    sqlsrv_execute($stmt);
    while ($row = sqlsrv_fetch_array($stmt)) {
        $js_array[] = json_encode($row);
    }
    echo "var javascript_array = ". json_encode($js_array) . ";\n";
    
    
    
?>
for(let i = 0; i < javascript_array.length; i++) {
    console.log (javascript_array[i]);
}
</script>