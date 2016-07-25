<?php
include('includes/db.php');

//Asighn Data to the Variables
$CusID        = $_GET['CusID'];
$Selected    = $_GET['Selected'];
$Title       = $_GET['Title'];
$Image       = $_GET['Image'];
$Description = $_GET['Description'];
$Contact     = $_GET['Contact'];
$Email       = $_GET['Email'];
$SDate       = $_GET['SDate'];
$EDate       = $_GET['EDate'];

/*Update postadvertiesement table in the Smartapp database*/
$query = "UPDATE postadvertiesement set Type='" . $Selected . "',Title='" . $Title . "',Image='" . $Image . "',Description='" . $Description . "',ContactNo='" . $Contact . "',Email='" . $Email . "',StartDate='" . $SDate . "',EndDate='" . $EDate . "' WHERE IDAdd='$CusID'";

$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>
