<?php
include('../includes/db.php');

$query="select * from user u, followers f where u.id = f.followerid";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$fol = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$fol[] = $row;	
	}
}

$json_response = json_encode($fol);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response;
?>


