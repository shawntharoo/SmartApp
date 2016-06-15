<?php
include('../includes/db.php');

$favourite = $_GET['follower'];
$id = $_GET['id'];
echo '<script language="javascript">';
echo 'alert("message successfully sent")';
echo '</script>';
$query='select * from followers where ownerid="'.$id.'" and followerid= "'.$favourite.'" ';
//$query='select * from followers where ownerid="'.$_GET['id'].'" and followerid="'.$_GET['follower'].'" ';

$result = $mysqli->query($query) or die($mysqli->error.__LINE__);


if($result->num_rows > 0)
 {
	echo "true";	
}
else
{
	echo "false";
}



header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
?>


