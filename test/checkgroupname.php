<?php
header('Access-Control-Allow-Origin: *');
$hostname = "localhost";
$username = "root";
$password = "";
$db_name = "smartapp";
$name =$_GET['name'];

$conn = mysql_connect("localhost", "root", "");
$db = mysql_select_db("smartapp", $conn);

$query ='select * from groups where group_name like "'.$name.'"';
$result = mysql_query($query,$conn);
if (!$result) {
  printf("Error: %s\n", mysql_error($conn)); 
   exit();
    }
if(mysql_num_rows($result) > 0) {
    // output data of each row
    while($row = mysql_fetch_array($result)) {
      //  echo $row["id"]."-";
	  
	   $markers[] = array(
      'id' => $row['id'],
      
     
    );
}

echo json_encode($markers);
}

?>