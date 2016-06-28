<?php
header('Access-Control-Allow-Origin:*');

include("dbconnect.php");
$password="12345";
$status=1;
$sql = 'update user set request="'.$status.'",password="'.$password.'"  where id="'.$_GET['id'].'" ';

$result=mysqli_query($con,$sql);

if($result){
echo "true";
}
else{
echo "false";
}
?>