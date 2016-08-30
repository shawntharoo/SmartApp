<?php
include('includes/db.php');

//Asighn Data to the Variables
$addID = $_GET['Addid'];
$memID = $_GET['CusID'];

//Select * from the favouriteadd table in smartapp database
//to check a field is exist with the ID
$check="SELECT * FROM favouriteadd WHERE AddId = '$addID' and MemId = '$memID'";
$result = $mysqli->query($check) or die($mysqli->error . __LINE__);
$fav = array();
if ($result->num_rows >= 1) {
  $fav[0]= 1;
}else{
  $fav[0]= 0;
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($fav[0]);
?>
