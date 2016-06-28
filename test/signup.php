<?php
header('Access-Control-Allow-Origin:*');
$CHECKRESULT=0;
$RETURN1="error";
$RETURN2="exists";
$name=$_GET['name'];
$con=mysqli_connect("localhost","root","","smartapp");
$sql1='select * from user where email="'.$_GET['email'].'" ';
$result1=mysqli_query($con,$sql1);

if(mysqli_num_rows($result1)>$CHECKRESULT)
{
echo "$RETURN2";
}
else
{
$sql2 = 'insert into user(name,class,email,role,requestdate) values ("'.$_GET['name'].'","'.$_GET['class'].'","'.$_GET['email'].'","member",now()) ';

$result2=mysqli_query($con,$sql2);

if($result2){
echo "true";
}
else{
echo "false";
}
}
?>