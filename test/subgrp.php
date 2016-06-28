<?php
header('Access-Control-Allow-Origin: *');
$hostname = "localhost";
$username = "root";
$password = "";
$db_name = "smartapp";


$conn = mysql_connect("localhost", "root", "");
$db = mysql_select_db("smartapp", $conn);
$a=$_GET['id'];
$query ='select * from groups where id='.$a;
$result = mysql_query($query,$conn);
if (!$result) {
  printf("Error: %s\n", mysql_error($conn)); 
   exit();
    }
if(mysql_num_rows($result) > 0) {
    // output data of each row
    while($row = mysql_fetch_array($result)) {
   
	   $markers[] = array(
      'id' => $row['id'],
       'gi' => $row['image'],
       'gd' => $row['description'],
       'gn' => $row['group_name'],
    );
}

echo json_encode($markers);
}

?>