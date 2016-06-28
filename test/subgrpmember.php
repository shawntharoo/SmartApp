<?php
header('Access-Control-Allow-Origin: *');
$hostname = "localhost";
$username = "root";
$password = "";
$db_name = "smartapp";


$conn = mysql_connect("localhost", "root", "");
$db = mysql_select_db("smartapp", $conn);
$a=$_GET['id'];
$query ='select * from user u,group_participants p where p.userid=u.id and p.groupid='.$a;
$result = mysql_query($query,$conn);
if (!$result) {
  printf("Error: %s\n", mysql_error($conn)); 
   exit();
    }
if(mysql_num_rows($result) > 0) {
    while($row = mysql_fetch_array($result)) {
     	  
	   $markers[] = array(
      'id' => $row['id'],
       'name' => $row['name'],
       
    );
}

echo json_encode($markers);
}

?>