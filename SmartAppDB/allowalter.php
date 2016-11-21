<?php
include("dbconnect.php");
$sql = 'update user set name="'.$_GET['name'].'",email="'.$_GET['email'].'" where id="'.$_GET['id'].'" ';
$sql2='delete from useralterations where uid="'.$_GET['id'].'"';
$result=mysqli_query($con,$sql);
$result2=mysqli_query($con,$sql2);
if($result&&$result2){
  	echo '<script language="javascript">';
           echo 'alert("successfully approved")';
           echo '</script>';
 
  header( "refresh:0.00001; url=editprofileapproval.php" );
}
else{
echo "false";
}

?>