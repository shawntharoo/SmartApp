<?php
header('Access-Control-Allow-Origin: *');
$hostname = "localhost";
$username = "root";
$password = "";
$db_name = "smartapp";
$unit = false;

$conn = mysql_connect("localhost", "root", "");
$db = mysql_select_db("smartapp", $conn);

$query ='INSERT INTO group_post(groupid,userid,descriptions,image,date,time) VALUES ("'.$_GET['id'].'","'.$_GET['UID'].'","'.$_GET['description'].'","'.$_GET['image'].'",now(),now())';
$ret = mysql_query($query,$conn);
 if (!$ret) {
  printf("Error: %s\n", mysqli_error($conn)); 
   exit();
    }

mysql_close($conn);

?>

