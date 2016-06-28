<?php
header('Access-Control-Allow-Origin:*');

include("dbconnect.php");
$sql = 'select * from user_family where userid="'.$_GET['id'].'" and spouse_name!="NULL"';
$result1 = mysqli_query($con,$sql);

if(mysqli_num_rows($result1) == 0){
$sql1 = 'insert into user_family(userid,spouse_name,child_name,type,date_of_birth,school_name) values ("'.$_GET['id'].'","'.$_GET['sname'].'","null","s","null",0)';
$result = mysqli_query($con,$sql1);
}
else{
$sql2 = 'update user_family set spouse_name = "'.$_GET['sname'].'" where userid="'.$_GET['id'].'" ';
$result = mysqli_query($con,$sql2);
}
if($result){
echo "true";
}
else{
echo "false";
}
?>