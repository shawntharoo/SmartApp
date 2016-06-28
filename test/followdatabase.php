<?php
header('Access-Control-Allow-Origin: *'); 
include("dbconnect.php");
$favourite = $_GET['follower'];
$id = $_GET['id'];

$query="INSERT INTO followers(ownerid,followerid)  VALUES ('$id','$favourite')";
$result1=mysqli_query($con,$query);




header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>