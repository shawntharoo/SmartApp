<?php
include('includes/db.php');
//Asighn Data to the Variables
$thissID = $_GET['thissID'];
$CusID = $_GET['CusID'];

//Dlete Data from postadvertiesement table in the Smartapp database
$query = "DELETE FROM favouriteadd WHERE AddId='$thissID' and MemId='$CusID'";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>
