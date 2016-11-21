<?php
// 1.getdata from form
  
  $username=$_POST["uname"];  
  $position=$_POST["position"]; 
  $period=$_POST["period"]; 
 


  
//2.create sql
if(isset($_POST["add"]))
{
$sql="update user set role='$position' where email='$username'";

//3.database connection

   include("dbconnect.php");
  
  if(mysqli_query($con,$sql))
  {
   	echo '<script language="javascript">';
           echo 'alert("successfully added")';
           echo '</script>';
 
   header( "refresh:0.00001; url=committee.php" );
  }
  else
  {
	echo "error";  
	echo mysqli_error($con);
  }
  }
  if(isset($_POST["update"]))
{
$sql="update user set role='$position' where email='$username'";

//3.database connection

   include("dbconnect.php");
  
  if(mysqli_query($con,$sql))
  {
   	echo '<script language="javascript">';
           echo 'alert("successfully updated")';
           echo '</script>';
 
   header( "refresh:0.00001; url=committee.php" );
  }
  else
  {
	echo "error";  
	echo mysqli_error($con);
  }
  }
  if(isset($_POST["delete"]))
{
$sql="update user set role='member' where email='$username'";

//3.database connection

   include("dbconnect.php");
  
  if(mysqli_query($con,$sql))
  {
   	echo '<script language="javascript">';
           echo 'alert("successfully deleted")';
           echo '</script>';
 
   header( "refresh:0.00001; url=committee.php" );
  }
  else
  {
	echo "error";  
	echo mysqli_error($con);
  }
  }
?>