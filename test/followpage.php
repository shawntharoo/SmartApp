<?php
header('Access-Control-Allow-Origin: *');
include("dbconnect.php");

$favourite = $_GET['follower'];

$query="select * from user where id='$favourite'";
$result=mysqli_query($con,$query);

$fav = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$fav[] = $row;	
	}
}

$json_response = json_encode($fav);


header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response;
?>


