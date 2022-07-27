<!DOCTYPE html>
<html>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
	<link rel="stylesheet" href="../styles/dataTables.bootstrap5.min.css" />
	<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.2/css/buttons.dataTables.css" />
	<link rel="stylesheet" href="https://cdn.datatables.net/select/1.3.1/css/select.dataTables.css" />
	<link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.5/css/responsive.dataTables.css" />
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.css" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <!-- jQuery addon-->
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<!--Scripts for data tables and its plugins-->
	<script src="https://code.jquery.com/jquery-migrate-3.4.0.js"></script>
	<script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js" ></script>
	<script src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap5.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/1.6.2/js/dataTables.buttons.js" ></script>
	<script src="https://cdn.datatables.net/select/1.3.1/js/dataTables.select.js" ></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js" ></script>
	<script src="https://cdn.datatables.net/responsive/2.2.5/js/dataTables.responsive.js" ></script>
	<script src ="../scripts/dataTables.altEditor.free.js"></script>
	<script src="https://cdn.datatables.net/datetime/1.1.2/js/dataTables.dateTime.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.js" ></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <script src="../scripts/papaparse.js"></script>
</html>

<script>
<?php
    include_once("../scripts/dbh.inc.php");
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
Papa.parse("../upload/"+ window.localStorage.getItem("newDeviceName")+".csv", {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
        console.log(results);
    }
});
window.localStorage.clear()
</script>
