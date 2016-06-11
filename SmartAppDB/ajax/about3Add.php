<?php 
include('../includes/db.php');
$workPlace = $_GET['workPlace'];
$address = $_GET['address'];
$contact = $_GET['contact'];
$email = $_GET['email'];
$workHour = $_GET['workHour'];

$query="UPDATE buissnescard set WorkPlace='".$workPlace."',Address='".$address."',Contact='".$contact."',Email='".$email."',WorkHour='".$workHour."' WHERE ID='5'";

$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>