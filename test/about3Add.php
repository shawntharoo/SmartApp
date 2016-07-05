<?php
include('includes/db.php');

//Asighn Data to the Variables
$CusID = $_GET['CusID'];
$workPlace = $_GET['workPlace'];
$address   = $_GET['address'];
$contact   = $_GET['contact'];
$email     = $_GET['email'];
$workHour  = $_GET['workHour'];

//Select ID from the businesscard table in smartapp database 
//to check a field is exist with the ID
$check="SELECT * FROM buissnescard WHERE ID = '$CusID'";
$result = $mysqli->query($check) or die($mysqli->error . __LINE__);;
$data = mysqli_fetch_array($result, MYSQLI_NUM);
if($data[0] > 1) {
	//Update businesscard table in the Smartapp database
	$query = "UPDATE buissnescard set WorkPlace='" . $workPlace . "',Address='" . $address . "',Contact='" . $contact . "',Email='" . $email . "',WorkHour='" . $workHour . "' WHERE ID='$CusID'";
	$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
	$result = $mysqli->affected_rows;
}
else{
	//Insert Data to the businesscard table in the smartapp Database
	$query1 = "INSERT INTO buissnescard(ID,WorkPlace,Address,Contact,Email,WorkHour)  VALUES ('$CusID','$workPlace','$address','$contact','$email','$workHour')";
	$result1 = $mysqli->query($query1) or die($mysqli->error . __LINE__);
	$result1 = $mysqli->affected_rows;
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>
