<?php
include('includes/db.php');

//Asighn Data to the Variables
$CusID      = $_GET['CusID'];
$Profession = $_GET['Profession'];
$Skills     = $_GET['Skills'];
$Awards     = $_GET['Awards'];
$WorkPlace  = $_GET['WorkPlace'];
$Address    = $_GET['Address'];
$Contact    = $_GET['Contact'];
$Email      = $_GET['Email'];
$WorkHour   = $_GET['WorkHour'];

/*Update businesscard table in the smartapp database*/
$query = "UPDATE buissnescard set Profession='" . $Profession . "',Skills='" . $Skills . "',Awards='" . $Awards . "',WorkPlace='" . $WorkPlace . "',Address='" . $Address . "',Contact='" . $Contact . "',Email='" . $Email . "',WorkHour='" . $WorkHour . "' WHERE ID='$CusID'";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>
