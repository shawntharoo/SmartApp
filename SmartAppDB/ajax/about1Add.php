<?php 
include('../includes/db.php');
$Fullname = $_GET['Fullname'];
$adress = $_GET['address'];
$Email = $_GET['email'];
$contactNo = $_GET['contactNo'];

$query="INSERT INTO about(Fullname,address,contactNo,email)  VALUES ('$Fullname','$adress','$contactNo','$Email')";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>