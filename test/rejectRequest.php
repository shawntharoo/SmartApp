<?php
header('Access-Control-Allow-Origin:*');

include("dbconnect.php");
$sql = 'update user set request=2 where id="'.$_GET['id'].'" ';

$result=mysqli_query($con,$sql);

if($result){
echo "true";
}
else{
echo "false";
}
?>