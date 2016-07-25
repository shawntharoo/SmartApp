<?php
include('includes/db.php');

//Asighn Data to the Variables
$ID         = $_GET['ID'];
$profession = $_GET['profession'];
$skills     = $_GET['skills'];
$awards     = $_GET['awards'];

//Select ID from the businesscard table in smartapp database
//to check a field is exist with the ID
$check="SELECT * FROM buissnescard WHERE ID = '$ID'";
$result = $mysqli->query($check) or die($mysqli->error . __LINE__);;
$data = mysqli_fetch_array($result, MYSQLI_NUM);
if($data[0] >= 1) {
	//Update businesscard table in the Smartapp database
	$query = "UPDATE buissnescard set Profession='" . $profession . "',Skills='" . $skills . "',Awards='" . $awards . "' WHERE ID='$ID'";
	$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
	$result = $mysqli->affected_rows;
}
else{
	//Insert Data to the businesscard table in the smartapp Database
	$query1 = "INSERT INTO buissnescard(ID,Profession,Skills,Awards)  VALUES ('$ID','$profession','$skills','$awards')";
	$result1 = $mysqli->query($query1) or die($mysqli->error . __LINE__);
	$result1 = $mysqli->affected_rows;
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>
