<?php
include ("dbconnect.php");
 $sql='update settings set value=1 where entity="profilealter"';

 
  if(mysqli_query($con,$sql))
  {
   	echo '<script language="javascript">';
           echo 'alert("successfully changed")';
           echo '</script>';
 
   header( "refresh:0.00001; url=index.php" );
  }
 
?>