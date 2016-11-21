<?php

   
include("dbconnect.php");
if(isset($_POST["username"]) && isset($_POST["password"]))
{

$sql = "SELECT * FROM user where email='".$_POST["username"]."' and password='".$_POST["password"]."' and request=1";
$result = mysqli_query($con,$sql);
// output data of from row
if($row=mysqli_fetch_array($result)) {
    
	
             session_start(); 
             $Globals['userID']=$row["id"];


             $_SESSION["userID"] = $row["id"];
            
             $_SESSION["user_role"] = $row["role"];
			 
             if($row["role"]=="admin")
			 {
			 
			  header('Location:index.php');
			  }
			  else
			  {
			  header('Location:batchgroup.php');
			  }
 }
 
else 
{
     	echo '<script language="javascript">';
           echo 'alert("Incorrect username or Password")';
           echo '</script>';
 
   header( "refresh:0.00001; url=login.php" );
}
    

}
else
{
   
}
?>