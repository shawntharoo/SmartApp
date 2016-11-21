<?php


include("dbconnect.php");
$sql = 'update user set request=2 where id="'.$_GET['id'].'" ';

$result=mysqli_query($con,$sql);

if($result){

echo '<script language="javascript">';
           echo 'alert("successfully Rejected")';
           echo '</script>';
 
  header( "refresh:0.00001; url=index.php" );
}
else{
echo "false";
}
?>