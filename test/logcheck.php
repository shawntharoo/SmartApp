<?php
header('Access-Control-Allow-Origin:*');

include('includes/db.php');
$sql = ' select * from user where email= "'.$_GET['email'].'" and password= "'.$_GET['password'].'" and request=1 ';
$result = $mysqli->query($sql);
if($row=mysqli_fetch_array($result))
{
 
 
	   $markers[] = array(
      'role' => $row['role'],
	  'id' => $row['id'],
      );
	  echo json_encode($markers);
}
else{
echo "false";
}
?>