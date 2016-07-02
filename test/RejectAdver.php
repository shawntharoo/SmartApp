<?php
header('Access-Control-Allow-Origin:*');
include('includes/db.php');
$SID = $_GET['SID'];

$query1 = "UPDATE usendadvertiesement
SET status= -1 WHERE SID='$SID'";
$result1 = $mysqli->query($query1) or die($mysqli->error . __LINE__);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
?>


