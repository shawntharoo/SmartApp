<?php
header('Access-Control-Allow-Origin:*');

include("dbconnect.php");

$sql = 'select COUNT(*) as count from user_family where userid="'.$_GET['id'].'" and type ="c" and school_name=1';

$result=mysqli_query($con,$sql);

if($row=mysqli_fetch_array($result)){
   $markers[] = array(
      'count' => $row['count'],
	
      );
	  echo json_encode($markers);
}
else{
echo "false";
}
?>