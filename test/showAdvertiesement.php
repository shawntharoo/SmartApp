<?php
header('Access-Control-Allow-Origin:*');
include('includes/db.php');

//Select Data from the postadvertiesement table in the smartapp database
$query = "select * from postadvertiesement GROUP BY IDAdd DESC";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$add = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $add[] = $row;
    }
}

$json_response = json_encode($add);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response;
?>
