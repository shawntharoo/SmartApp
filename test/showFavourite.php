<?php
include('includes/db.php');

//Asighn Data to the Variables
$CusID = $_GET['CusID'];

//Select Data from the postadvertisement from the smartapp database
$query = "select * from favouriteadd where MemId = '$CusID' GROUP BY ID DESC ";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$add = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $add[] = $row;
    }
}

$json_response = json_encode($add);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response;
?>
