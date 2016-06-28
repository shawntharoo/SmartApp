<?php
header('Access-Control-Allow-Origin:*');

include("dbconnect.php");
$markers = array();
$sql = ' select * from user where id= "'.$_GET['id'].'" ';
$result = mysqli_query($con,$sql);
if($row=mysqli_fetch_array($result))
{
 
	   $markers[] = array(
      'name' => $row['name'],
	  'class' => $row['class'],
      'email' => $row['email'],
	  'address' => $row['address'],
	  'contact_no' => $row['contact_no'],
	  
      
    );
	echo json_encode($markers);

}
else{
echo "false";
}
?>