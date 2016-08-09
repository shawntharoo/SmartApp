<?php
include('includes/db.php');
//Asighn Data to the Variables
$CusID = $_GET['CusID'];
//Select Data from the buissnescard table in the Samrtapp database
$query = "select Status,Admin from disableadd where MemID='$CusID'";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$stat = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $stat[] = $row;
    }
}

$json_response = json_encode($stat);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response;
?>
