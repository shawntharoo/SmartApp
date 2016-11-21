<?php


include("dbconnect.php");

$sql = 'select email from user where role="rep" ';

$result=mysqli_query($con,$sql);
$msg="There are member requests that needs to be approved";
if(mysqli_num_rows($result)>0)
{
$row=(mysqli_fetch_array($result));
$email=$row['email'];
//mail($email,"member requsests",$msg);
echo '<script language="javascript">';
           echo 'alert("message sent successfully")';
           echo '</script>';
 
  header( "refresh:0.00001; url=index.php" );
}
else
{
echo '<script language="javascript">';
           echo 'alert("There are no class representatives by now")';
           echo '</script>';
 
  header( "refresh:0.00001; url=index.php" );
}



?>