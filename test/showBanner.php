<?php
include('includes/db.php');

$query="select Image from postadvertiesement";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$ban = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$ban[] = $row;	
	}
}

$json_response = json_encode($ban);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response;
?>


