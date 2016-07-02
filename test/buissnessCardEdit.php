<?php
include('includes/db.php');

$Profession = $_GET['Profession'];
$Skills     = $_GET['Skills'];
$Awards     = $_GET['Awards'];
$WorkPlace  = $_GET['WorkPlace'];
$Address    = $_GET['Address'];
$Contact    = $_GET['Contact'];
$Email      = $_GET['Email'];
$WorkHour   = $_GET['WorkHour'];

$query = "UPDATE buissnescard set Profession='" . $Profession . "',Skills='" . $Skills . "',Awards='" . $Awards . "',WorkPlace='" . $WorkPlace . "',Address='" . $Address . "',Contact='" . $Contact . "',Email='" . $Email . "',WorkHour='" . $WorkHour . "' WHERE ID='1'";

$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>