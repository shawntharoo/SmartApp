<?php

header('Access-Control-Allow-Origin:*');
include("dbconnect.php");
$sql = 'update user set address="'.$_GET['address'].'",home="'.$_GET['home'].'",contact_no="'.$_GET['mobile'].'" where id="'.$_GET['id'].'" ';
$result = mysqli_query($con,$sql);

if($result){
echo "true";
}
else{
echo "false";
}
?>