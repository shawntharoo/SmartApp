<?php
include('includes/db.php');
//Asighn Data to the Variables
$addID = $_GET['Addid'];
$memID = $_GET['CusID'];

//Dlete Data from postadvertiesement table in the Smartapp database
$query = "DELETE FROM favouriteadd WHERE AddId = '$addID' and MemId = '$memID'";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>
