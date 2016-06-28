<?php
header('Access-Control-Allow-Origin:*');

include("dbconnect.php");

$sql = 'select * from user_family where userid="'.$_GET['id'].'" and type ="s"';

$result=mysqli_query($con,$sql);

if($row=mysqli_fetch_array($result)){
   $markers[] = array(
      'sname' => $row['spouse_name'],
	
      );
	  echo json_encode($markers);
}
else{
echo "false";
}
?>