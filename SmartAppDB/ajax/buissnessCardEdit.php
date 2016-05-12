<?php 
include('../includes/db.php');

//$CusID = $_GET['CusID'];

$profession = $_GET['Profession'];
$skills = $_GET['Skills'];
$workName = $_GET['wpName'];
$workAddress = $_GET['wpAddress'];
$workContact = $_GET['wpContact'];
$workEmail = $_GET['wpEmail'];
$workHour = $_GET['wpHours'];

$query="UPDATE buissnesscard set Profession='".$profession."',Skills='".$skills."',wpName='".$workName."',wpAddress='".$workAddress."',wpContact='".$workContact."',wpEmail='".$workEmail."',wpHours'".$workHour."' WHERE ID='1'";

$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>