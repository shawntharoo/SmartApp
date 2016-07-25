<?php
include('includes/db.php');

//Asighn Data to the Variables
$CusID = $_GET['CusID'];

//Select Data from the buissnescard table in the Samrtapp database
$query = "select * from notification where MemberID='$CusID' GROUP BY NID DESC ";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$notif = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $notif[] = $row;
    }
}

$json_response = json_encode($notif);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response;
?>
