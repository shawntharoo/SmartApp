<?php
include('includes/db.php');

//Asighn Data to the Variables
$ID         = $_GET['ID'];
$profession = $_GET['profession'];
$skills     = $_GET['skills'];
$awards     = $_GET['awards'];

//Insert Data to the businesscard table in the smartapp Database
$query = "INSERT INTO buissnescard(ID,Profession,Skills,Awards)  VALUES ('$ID','$profession','$skills','$awards')";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>
