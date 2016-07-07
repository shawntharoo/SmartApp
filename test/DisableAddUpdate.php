<?php
include('includes/db.php');

//Asighn Data to the Variables
$CusID  = $_GET['CusID'];
$Status = $_GET['addStatus'];

//Update businesscard table in the Smartapp database
$query = "UPDATE disableadd set Status='" . $Status . "' WHERE MemID='$CusID'";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
?>
