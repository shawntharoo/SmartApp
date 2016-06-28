<?php
header('Access-Control-Allow-Origin:*');

include("dbconnect.php");
$RETURN2="exists";
$CHECKRESULT=0;
$sql1='select * from user where email="'.$_GET['email'].'" ';
$result1=mysqli_query($con,$sql1);


$sql = 'update user set name="'.$_GET['name'].'",email="'.$_GET['email'].'" where id="'.$_GET['id'].'" ';

$result=mysqli_query($con,$sql);

if($result){
echo "true";
}
else{
echo "false";
}

?>