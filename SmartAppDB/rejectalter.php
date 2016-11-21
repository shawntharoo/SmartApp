<?php
include("dbconnect.php");

$sql='delete from useralterations where uid="'.$_GET['id'].'"';
$result=mysqli_query($con,$sql);

if($result){
  	echo '<script language="javascript">';
           echo 'alert("successfully rejected")';
           echo '</script>';
 
  header( "refresh:0.00001; url=editprofileapproval.php" );
}
else{
echo "false";
}

?>