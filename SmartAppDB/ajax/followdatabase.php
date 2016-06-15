<?php 
include('../includes/db.php');
$favourite = $_GET['follower'];
$id = $_GET['id'];

$query="INSERT INTO followers(ownerid,followerid)  VALUES ('$id','$favourite')";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>